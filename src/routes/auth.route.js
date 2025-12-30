import {Router} from "express";
import {regisValid} from "../validation/regis.valid.js";
import {handleValidation} from "../middleware/handleValidation.middleware.js";
import {register} from "../controller/auth.controller.js";

const authRoute = Router();

// untuk register
authRoute.post("/register", regisValid, handleValidation, register);

export default authRoute;
