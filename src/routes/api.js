import {Router} from "express";
import authRoute from "./auth.route.js";

const apiRoute = Router();

// untuk endpoint auth
apiRoute.use("/auth",authRoute)

export default apiRoute;
