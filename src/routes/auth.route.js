import {Router} from "express";
import {regisValid} from "../validation/regis.valid.js";
import {handleValidation} from "../middleware/handleValidation.middleware.js";
import {checkMe, login, register} from "../controller/auth.controller.js";
import {isAuth} from "../middleware/isAuth.middleware.js";
import { loginValid } from "../validation/login.valid.js";

const authRoute = Router();

// untuk register
authRoute.post("/register", regisValid, handleValidation, register);

// untuk checkMe
authRoute.get("/me", isAuth, checkMe);

// untuk login
authRoute.post("/login",loginValid,handleValidation,login)
export default authRoute;
