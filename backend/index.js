// import libraries 
import express, { application } from "express";
import cookieParser from "cookie-parser";
import dbconnect from "./database/index.js";
import config from './config/index.js';
import cors from "cors"
import authRoutes from "./routes/auth.routes.js";
import courseRoutes from "./routes/courses.routes.js"
import lessonRoutes from "./routes/lesson.routes.js"
import commentRoutes from "./routes/comment.routes.js";
import errorHandler from "./middlewares/errorHandler.js";
import profileRoutes from "./routes/profile.routes.js";


const { PORT } = config;
const app = express();

app.use(cors({origin: true, credentials: true}));
app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));


app.use(cookieParser())

dbconnect()

app.use("/api/auth", authRoutes);
app.use("/api/online-lectures", courseRoutes);
app.use("/api/lesson", lessonRoutes);
app.use("/api/comment",commentRoutes);
app.use("/api/profile", profileRoutes);


// for deployment testing purpose 
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`backend app running on port ${PORT}`)
})