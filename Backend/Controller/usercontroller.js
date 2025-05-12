import createTokenAndCookies from "../jwt/AuthToken.js";
import { User } from "../Model/usermodel.js";
import bcrypt from "bcryptjs"


export const Register = async (req,res) =>{
    const {FullName , Email , Password , Role} = req.body;
    if(!FullName || ! Email || !Password || !Role){
        return res.status(400).json({message: "All fields are required"})
    }

    const user = await User.findOne({Email})
    if(user){
        return res.status(400).json({message: "User already exists with same email"})
    }

    const hashedpassword = await bcrypt.hash(Password , 10)
    const newUser = new User({FullName , Email , Password:hashedpassword , Role});
    await newUser.save()

    if(newUser){
        const token = await createTokenAndCookies(newUser._id , res)
        console.log(token)
        res.status(201).json({message : "User registered successfully" , newUser , token : token})
    }
 
};

export const Login = async (req, res) => {
    const { Email, Password } = req.body;

    try {
        if (!Email || !Password) {
            return res.status(400).json({ message: "Please fill all the details" });
        }

        const user = await User.findOne({ Email }).select("+Password");

        if (!user || !user.Password) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(Password, user.Password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = await createTokenAndCookies(user._id, res);

        res.status(200).json({
            message: "User logged in successfully",
            user: {
                _id: user._id,
                FullName: user.FullName,
                Email: user.Email,
            },
            token: token,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
