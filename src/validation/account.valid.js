import {body} from "express-validator";
import Account from "../models/Account.js";

const accountValid = [
    body("saldo")
    .notEmpty()
    .withMessage("saldo tidak boleh kosong")
    .isInt()
    .withMessage("saldo harus berbentuk nomor")
    .toInt(),
    body().custom(async (value, {req}) => {
        const user_id = req?.payload?.profile?.user_id;
        const data = await Account.findUnique({where: {user_id}});
        if (data) {
            throw new Error("tidak boleh menambahkan saldo lain di akun yang sama");
        }
        return true;
    }),
];

export default accountValid;
