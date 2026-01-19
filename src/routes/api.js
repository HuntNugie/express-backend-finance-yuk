import {Router} from "express";
import authRoute from "./auth.route.js";
import accountRoute from "./account.route.js";
import { isAuth } from "../middleware/isAuth.middleware.js";
import transaksiRoute from "./transaksi.route.js";

const apiRoute = Router();

// untuk endpoint auth
apiRoute.use("/auth",authRoute)

// untuk endpoint yang berhubungan dengan account
apiRoute.use("/account",isAuth, accountRoute)

// untuk endpoint yang berhubungan dengan transaksi
apiRoute.use("/transaksi",isAuth,transaksiRoute)
export default apiRoute;
