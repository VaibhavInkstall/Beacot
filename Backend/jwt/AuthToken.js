import jwt from "jsonwebtoken";
import {TeacherSignup} from "../Model/TeacherFormModel.js"

const createTokenAndCookies = async (userId) =>{
    const token = jwt.sign({userId} , process.env.jwt_secretkey , {
        expiresIn : "7d"
    })
    await TeacherSignup.findByIdAndUpdate(userId , {token})
    return token;
}

export default createTokenAndCookies ;