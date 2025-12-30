import {body} from "express-validator";
import User from "../models/User.js";

export const regisValid = [
    body("email")
    .notEmpty()
    .withMessage("email tidak boleh kosong")
    .isEmail()
    .withMessage("format email salah")
    .custom(async (value, {req}) => {
        const check = await User.findUnique({where: {email: value}});
        if (check) {
            throw new Error("email sudah di gunakan orang lain");
        }
        return true;
    }),
    body("password").notEmpty().withMessage("password tidak boleh kosong"),
    body("confirm_password")
    .notEmpty()
    .withMessage("konfirmasi password tidak boleh kosong")
    .custom((value, {req}) => {
        if (value !== req.body.password) {
            throw new Error("password dan konfirmasi password salah");
        }
        return true
    }),
    body("nama")
    .notEmpty()
    .withMessage("nama tidak boleh kosong")
    .trim()
    .matches(/^[A-Za-zÀ-ÿ]+(?:[ '-][A-Za-zÀ-ÿ]+)*$/)
    .withMessage("format nama anda salah"),
    body("jenis_kelamin")
    .notEmpty()
    .withMessage("jenis kelamin tidak boleh kosong")
    .isIn(["L", "P"])
    .withMessage("format jenis kelamin anda tidak benar"),
    body("tgl_lahir")
    .notEmpty()
    .withMessage("Tanggal lahir wajib diisi")
    .isISO8601()
    .withMessage("Format tanggal lahir harus YYYY-MM-DD")
    .toDate(),
];
