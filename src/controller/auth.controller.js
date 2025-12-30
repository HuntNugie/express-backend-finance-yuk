import {registerService} from "../service/auth.service.js";

export const register = async (req, res) => {
    try {
        const add = await registerService(req.body);
        return res.status(200).json({
            status: true,
            message: "berhasil menambahkan data",
        });
    } catch (error) {
        return res.status(400).json({
            status: false,
            error,
        });
    }
};

export const checkMe = (req, res) => {
    return res.json({status: true, data: req.payload});
};
