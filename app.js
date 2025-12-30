import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {config} from "dotenv";
import route from "./src/routes/index.js";
config();
// instance express
const app = express();

// setup cors
app.use(
    cors({
        origin: process.env.ORIGIN,
        credentials: true,
    })
);

// setup cookie parser
app.use(cookieParser());

// untuk routing
app.use(route)


export default app