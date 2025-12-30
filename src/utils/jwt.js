import {sign, verify} from "jsonwebtoken";
import {config} from "dotenv";
config();

const secret = process.env.SECRET_JWT;
export const tokenSign = (payload) => {
    return sign(payload, secret, {expiresIn: "1h"});
};

export const tokenDecode = (token) => {
    return verify(token, secret);
};
