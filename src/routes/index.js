import {Router} from "express";
import apiRoute from "./api.js";

const route = Router();

route.get("/", (req, res) => {
    res.send("berhasil");
});


// untuk endpoint api
route.use("/api",apiRoute)

export default route;
