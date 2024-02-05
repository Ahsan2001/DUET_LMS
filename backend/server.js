// import libraries 
import express from "express";
import cookieParser from "cookie-parser";
import dbconnect from "./database/index.js";
import config from './config/index.js';

const { PORT } = config;
import authRoutes from "./routes/auth.routes.js"

const app = express();
app.use(express.json());
// app.use(cookieParser);

dbconnect()

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`backend app running on port ${PORT}`)
})