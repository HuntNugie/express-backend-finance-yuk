import {tokenDecode} from "../utils/jwt.js";

export const isAuth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({status: false, error: "token tidak ada"});
    }
    try {
        const valid = tokenDecode(token);
        req.payload = valid;
        next();
    } catch (error) {
        return res.status(401).json({status: false, error: "token sudah tidak valid"});
    }
};
