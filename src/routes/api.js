import {Router} from "express";
import authRoute from "./auth.route.js";
import accountRoute from "./account.route.js";
import { isAuth } from "../middleware/isAuth.middleware.js";

const apiRoute = Router();

// untuk endpoint auth
apiRoute.use("/auth",authRoute)

// untuk endpoint yang berhubungan dengan account
apiRoute.use("/account",isAuth, accountRoute)
export default apiRoute;
