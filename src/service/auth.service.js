import User from "../models/User.js";
import {hashPass} from "../utils/bcrypt.js";

export const registerService = async (data) => {
    console.log(data)
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
