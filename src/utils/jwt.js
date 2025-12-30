import jwt from "jsonwebtoken";
import {config} from "dotenv";
config();

const secret = process.env.SECRET_JWT;
export const tokenSign = (payload) => {
    return jwt.sign(payload, secret, {expiresIn: "1h"});
};

export const tokenDecode = (token) => {
    return jwt.verify(token, secret);
};
