import { Router } from "express";
import accountValid from "../validation/account.valid.js";
import { handleValidation } from "../middleware/handleValidation.middleware.js";
import { store } from "../controller/account.controller.js";

const accountRoute = Router();

// untuk menambhkan pertama kali saldo
accountRoute.post("/add",accountValid,handleValidation,store)

export default accountRoute