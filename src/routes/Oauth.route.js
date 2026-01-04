import {Router} from "express";
import passport from "passport";
import { config } from "dotenv";
import { GoogleCallback } from "../controller/auth.controller.js";
config();

const OauthRoute = Router();

OauthRoute.get(
    "/",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);

OauthRoute.get("/callback",passport.authenticate("google",{
    session:false,
    failureRedirect:`${process.env.ORIGIN}/login`
}),
 GoogleCallback
)
export default OauthRoute;
