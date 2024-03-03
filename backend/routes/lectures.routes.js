import express from "express";
const lectureRoutes = express.Router();



import Auth from "../middlewares/auth.js";
import { CreateCourse } from "../controller/online-courses/create-course.js";
import { EditCourse } from "../controller/online-courses/edit-course.js";
import { GetAllCourses } from "../controller/online-courses/get-courses.js";
import { DeleteCourse } from "../controller/online-courses/delete-course.js";
import { Detail } from "../controller/online-courses/detail.js";


lectureRoutes.get('/get', GetAllCourses);
lectureRoutes.get('/detail/:id', Detail);
lectureRoutes.post('/create', Auth, CreateCourse);
lectureRoutes.post('/edit', Auth, EditCourse);
lectureRoutes.delete('/delete/:id', Auth, DeleteCourse);


export default lectureRoutes;