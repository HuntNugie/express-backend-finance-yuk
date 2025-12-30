import {Router} from "express";
import {regisValid} from "../validation/regis.valid.js";
import {handleValidation} from "../middleware/handleValidation.middleware.js";
import {checkMe, register} from "../controller/auth.controller.js";
import { isAuth } from "../middleware/isAuth.middleware.js";

const authRoute = Router();

// untuk register
authRoute.post("/register", regisValid, handleValidation, register);

// untuk checkMe
authRoute.get("/me",isAuth,checkMe)
export default authRoute;
