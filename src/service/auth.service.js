import User from "../models/User.js";
import {comparePass, hashPass} from "../utils/bcrypt.js";

export const registerService = async (data) => {
    const hash = await hashPass(data.password);
    try {
        const req = await User.create({
            data: {
                email: data.email,
                password: hash,
                profile: {
                    create: {
                        nama: data.nama,
                        jenis_kelamin: data.jenis_kelamin,
                        tgl_lahir: data.tgl_lahir,
                    },
                },
            },
            include: {
                profile: true,
            },
        });
        return req;
    } catch (error) {
        throw new Error(error)
    }
};


export const loginService = async(data,pwUser)=>{
    const {email,password,profile} = data;
    const check = await comparePass(pwUser,password);
    if(!check){
        throw new Error("email atau password salah")
    }
    const result = {
        email,
        profile
    }
    return result
}