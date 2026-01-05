import {Router} from "express";
import authRoute from "./auth.route.js";
import walletRoute from "./wallet.route.js";

const apiRoute = Router();

// untuk endpoint auth
apiRoute.use("/auth",authRoute)

// untuk endpoint yang berhubungan dengan account
apiRoute.use("/wallet",walletRoute)
export default apiRoute;
