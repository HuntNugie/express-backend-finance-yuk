import User from "../models/User.js";
import {loginService, registerService} from "../service/auth.service.js";
import {tokenSign} from "../utils/jwt.js";
import {config} from "dotenv";
config();

// untuk register
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

// untuk checkme
export const checkMe = async (req, res) => {
    console.log(req.payload)
    const result = await User.findUnique(
        {
            where: {
                id: req?.payload?.profile?.user_id
            },
            include:{
                profile:true,
                wallet:true
            }
        });
        const response = {
            email:result.email,
            wallet:result.wallet,
            profile:result.profile
        }
    return res.json({status: true, data: response});
};

// untuk login
export const login = async (req, res) => {
    const password = req.body.password;
    try {
        const result = await loginService(req.result, password);
        const token = tokenSign(result);
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            secure: true,
            maxAge: 60 * 60 * 1000,
        });
        return res.json({status: true, data: result});
    } catch (error) {
        return res.status(401).json({status: false, error: error.message});
    }
};

// untuk logout
export const logout = async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });
    return res.json({
        status: true,
        message: "berhasil logout",
    });
};

// untuk callback Oauth google
export const GoogleCallback = async (req, res) => {
    const user = req.user;
    const token = tokenSign(user);
    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 60 * 60 * 1000,
    });
    return res.redirect(`${process.env.ORIGIN}/dashboard`);
};
