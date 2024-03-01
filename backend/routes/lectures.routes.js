import express from "express";
const lectureRoutes = express.Router();



// import Auth from "../middlewares/auth.js";
import {CreateCourse} from "../controller/online-courses/create-course.js";     


lectureRoutes.post('/create',  CreateCourse);


export default lectureRoutes;