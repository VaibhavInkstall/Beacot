import express from "express";
// import { Login, Register } from "../Controller/usercontroller.js";s
import { TeacherForm } from "../Controller/TeacherFormController.js";

const router = express.Router();


router.post("/TeacherForm" , TeacherForm);


    

export default router
