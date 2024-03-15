import express from "express";
const courseRoutes = express.Router();



import Auth from "../middlewares/auth.js";
import { CreateCourse } from "../controller/online-courses/create-course.js";
import { EditCourse } from "../controller/online-courses/edit-course.js";
import { GetAllCourses } from "../controller/online-courses/get-courses.js";
import { DeleteCourse } from "../controller/online-courses/delete-course.js";
import { Detail } from "../controller/online-courses/detail.js";


courseRoutes.get('/get', GetAllCourses);
courseRoutes.get('/course/:id', Detail);
courseRoutes.post('/create', Auth, CreateCourse);
courseRoutes.post('/edit/:id', Auth, EditCourse);
courseRoutes.delete('/delete/:id', Auth, DeleteCourse);


export default courseRoutes;