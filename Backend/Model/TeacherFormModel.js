import mongoose from "mongoose";
import validator from "validator"


const TeacherSignupSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Please Enter a  Valid Email"]
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    AlterPhoneNumber: {
        type: String,

    },
    Dob: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "Other"]
    },
    Address: {
        type: String,
        required: true
    },
    UserImage: {
        type: String,

    },
    Password: {
        type: String,
        required: true,
        select: false,
    },
    ConfirmPassword: {
        type: String,
        required: true,
        select: false,
    },
    Qualification: {
        type: String,
        required: true
    },
    Subjects: {
        type: [String],
        required: true,
        validate: {
            validator: function (subjects) {
                // Check each subject is valid
                const allowed = ["Maths", "Science", "Social", "Hindi", "English"];
                return subjects.every(subject => allowed.includes(subject));
            },
            message: 'Subjects must be one or more of: Maths, Science, Social, Hindi, English'
        }
    },
    GradesYouTeach: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                // Accept formats like "1-4" or "3-8"
                const regex = /^[1-9]-[1-9]$/;

                if (!regex.test(value)) return false;

                const [start, end] = value.split('-').map(Number);
                return start < end && start >= 1 && end <= 12; // You can adjust max grade
            },
            message: 'GradesYouTeach must be a valid range like "1-4", "3-8", and start must be less than end'
        }
    },
    Experience: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                // Match format like "1-3" or "5-10"
                const regex = /^[0-9]{1,2}-[0-9]{1,2}$/;
                if (!regex.test(value)) return false;

                const [start, end] = value.split('-').map(Number);
                return start < end && start >= 0 && end <= 50; // Assuming max 50 years of experience
            },
            message: 'Experience must be a valid range like "1-3", "5-10", with start less than end'
        }
    },
    ProfileImage: {
        type: String,

    },
    Certifications: {
        type: String,

    },
    Resume: {
        type: String,

    },
    IntroVideo: {
        type: String,

    },
    Description: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    VimeoUrl: {
        type: String,
        default: "Not provided"
    }


})

export const TeacherSignup = mongoose.model("TeacherSignup", TeacherSignupSchema)