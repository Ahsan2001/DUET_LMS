// import libraries 
import express from "express";
import cookieParser from "cookie-parser";
import dbconnect from "./database/index.js";
import config from './config/index.js';
import cors from "cors"
import authRoutes from "./routes/auth.routes.js";
import lectureRoutes from "./routes/lectures.routes.js"
import errorHandler from "./middlewares/errorHandler.js";
const { PORT } = config;



const app = express();

app.use(cors({origin: true, credentials: true}));

app.use(express.json());
app.use(cookieParser())

dbconnect()

app.use("/api/auth", authRoutes);
app.use("/api/online-lectures", lectureRoutes);


// for deployment testing purpose 
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`backend app running on port ${PORT}`)
})