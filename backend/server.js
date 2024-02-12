// import libraries 
import express from "express";
import cookieParser from "cookie-parser";
import dbconnect from "./database/index.js";
import config from './config/index.js';
import cors from "cors"
 
const { PORT } = config;


import authRoutes from "./routes/auth.routes.js"



const app = express();

app.use(cors({origin: true, credentials: true}));

app.use(express.json());

dbconnect()

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`backend app running on port ${PORT}`)
})