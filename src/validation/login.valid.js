import { body } from "express-validator";
import User from "../models/User.js";

export const loginValid = [
    body("email")
    .notEmpty().withMessage("email tidak boleh kosong")
    .isEmail().withMessage("format email salah").custom(async(value,{req})=>{
        const check = await User.findUnique({
            where:{email:value},
            include:{profile:true}
        });
        if(!check){
            throw new Error("email anda atau password salah")
        }
        req.result = check;
        return true
    }),
    body("password")
    .notEmpty().withMessage("password tidak boleh kosong")
]