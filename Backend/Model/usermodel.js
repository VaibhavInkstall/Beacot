import mongoose from "mongoose";
import validator from "validator"

const userSchema = new mongoose.Schema({
    FullName :{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        validate:[validator.isEmail,"Please Enter a  Valid Email"]
    },
    Password:{
        type:String,
        required:true,
        select:false,
    },
    Role:{
        type:String
    },
    token:{
        type:String
    }
})

export const User = mongoose.model("User" , userSchema)