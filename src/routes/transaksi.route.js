import { Router } from "express";
import { isAuth } from "../middleware/isAuth.middleware.js";
import { Add } from "../controller/transaksi.controller.js";

const transaksiRoute = Router();

// UNTUK MENAMBAHKAN PEMASUKAN DAN PENGELUARAN
transaksiRoute.post("/add",isAuth,Add)

export default transaksiRoute