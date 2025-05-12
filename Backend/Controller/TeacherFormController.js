import createTokenAndCookies from "../jwt/AuthToken.js";
import { TeacherSignup } from "../Model/TeacherFormModel.js";
import bcrypt from "bcryptjs";

import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Only text working code

// export const TeacherForm = async (req, res) => {
//   try {
//     const {
//       FullName,
//       UserName,
//       Email,
//       PhoneNumber,
//       AlterPhoneNumber,
//       Dob,
//       Gender,
//       Address,
//       Password,
//       ConfirmPassword,
//       Qualification,
//       Experience,
//       Subjects,
//       GradesYouTeach,
//       Description,
//     } = req.body;

//     // Validate required fields
//     if (
//       !FullName || !UserName || !Email || !PhoneNumber || !Dob ||
//       !Gender || !Address || !Password || !ConfirmPassword ||
//       !Qualification || !Experience || !Subjects || !GradesYouTeach || !Description
//     ) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // Check for existing email and phone
//     const emailExists = await TeacherSignup.findOne({ Email });
//     if (emailExists) return res.status(400).json({ message: "Email already in use" });

//     const phoneExists = await TeacherSignup.findOne({ PhoneNumber });
//     if (phoneExists) return res.status(400).json({ message: "Phone number already in use" });

//     let finalAlterPhone = AlterPhoneNumber?.trim() || "Not provided";
//     if (finalAlterPhone !== "Not provided") {
//       const altPhoneExists = await TeacherSignup.findOne({ AlterPhoneNumber: finalAlterPhone });
//       if (altPhoneExists) return res.status(400).json({ message: "Alternate phone number already in use" });
//     }

//     // Hash passwords
//     const hashedPassword = await bcrypt.hash(Password, 10);
//     const hashedConfirmPassword = await bcrypt.hash(ConfirmPassword, 10);

//     const newTeacher = new TeacherSignup({
//       FullName,
//       UserName,
//       Email,
//       PhoneNumber,
//       AlterPhoneNumber: finalAlterPhone,
//       Dob,
//       Gender,
//       Address,
//       Password: hashedPassword,
//       ConfirmPassword: hashedConfirmPassword,
//       Qualification,
//       Experience,
//       Subjects,
//       GradesYouTeach,
//       Description,
     
//     });

//     await newTeacher.save();
//     const token = await createTokenAndCookies(newTeacher._id);

//     return res.status(201).json({
//       message: "Teacher registered successfully",
//       newTeacher,
//       token,
//     });

//   } catch (error) {
//     console.error("TeacherForm error:", error);
//     if (!res.headersSent) {
//       return res.status(500).json({ error: error.message || "Internal server error" });
//     }
//   }
// };






// Video uploading logic


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const TeacherForm = async (req, res) => {
  try {
    const {
      FullName,
      UserName,
      Email,
      PhoneNumber,
      AlterPhoneNumber,
      Dob,
      Gender,
      Address,
      Password,
      ConfirmPassword,
      Qualification,
      Experience,
      Subjects,
      GradesYouTeach,
      Description,
    } = req.body;
   console.log("FullName",FullName);
    if (
      !FullName || !UserName || !Email || !PhoneNumber || !Dob ||
      !Gender || !Address || !Password || !ConfirmPassword ||
      !Qualification || !Experience || !Subjects || !GradesYouTeach || !Description
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const emailExists = await TeacherSignup.findOne({ Email });
    if (emailExists) return res.status(400).json({ message: "Email already in use" });

    const phoneExists = await TeacherSignup.findOne({ PhoneNumber });
    if (phoneExists) return res.status(400).json({ message: "Phone number already in use" });

    let finalAlterPhone = AlterPhoneNumber?.trim() || "Not provided";
    if (finalAlterPhone !== "Not provided") {
      const altPhoneExists = await TeacherSignup.findOne({ AlterPhoneNumber: finalAlterPhone });
      if (altPhoneExists) return res.status(400).json({ message: "Alternate phone number already in use" });
    }

    // === Vimeo Upload (Optional) ===
    let vimeoUrl = "Not provided";
    if (req.files && req.files.video) {
      const video = req.files.video;
      const tempPath = path.join(__dirname, '../tmp', video.name);

      // Move video temporarily
      await video.mv(tempPath);

      const fileSize = fs.statSync(tempPath).size;

      // Step 1: Create Vimeo upload ticket
      const createRes = await axios.post(
        'https://api.vimeo.com/me/videos',
        {
          upload: {
            approach: 'tus',
            size: fileSize,
          },
          name: title || 'Uploaded via API',
          description: description || 'No description',
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const uploadLink = createRes.data.upload.upload_link;
      const videoUri = createRes.data.uri;

      // Step 2: Upload video using PATCH
      const videoStream = fs.createReadStream(tempPath);
      await axios.patch(uploadLink, videoStream, {
        headers: {
          'Tus-Resumable': '1.0.0',
          'Upload-Offset': '0',
          'Content-Type': 'application/offset+octet-stream',
          'Content-Length': fileSize,
        },
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
      });

      // Remove local temp file
      fs.unlinkSync(tempPath);

      // Vimeo URL to store in DB
      vimeoUrl = `https://vimeo.com${videoUri}`;
    }

    // === Save teacher with Vimeo URL ===
    const hashedPassword = await bcrypt.hash(Password, 10);
    const hashedConfirmPassword = await bcrypt.hash(ConfirmPassword, 10);

    const newTeacher = new TeacherSignup({
      FullName,
      UserName,
      Email,
      PhoneNumber,
      AlterPhoneNumber: finalAlterPhone,
      Dob,
      Gender,
      Address,
      Password: hashedPassword,
      ConfirmPassword: hashedConfirmPassword,
      Qualification,
      Experience,
      Subjects,
      GradesYouTeach,
      Description,
      VimeoUrl: vimeoUrl,
    });

    await newTeacher.save();
    const token = await createTokenAndCookies(newTeacher._id);

    return res.status(201).json({
      message: "Teacher registered successfully",
      newTeacher,
      token,
    });

  } catch (error) {
    console.error("TeacherForm error:", error);
    if (!res.headersSent) {
      return res.status(500).json({ error: error.message || "Internal server error" });
    }
  }
};