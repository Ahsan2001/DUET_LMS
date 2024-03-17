import express from "express";
const lessonRoutes = express.Router();



import Auth from "../middlewares/auth.js";
import { CreateLesson } from "../controller/lesson/create-lesson.js";
import { LectureDetail } from "../controller/lesson/get-lesson.js";
// import { EditCourse } from "../controller/online-courses/edit-course.js";
// import { GetAllCourses } from "../controller/online-courses/get-courses.js";
// import { DeleteCourse } from "../controller/online-courses/delete-course.js";
// import { Detail } from "../controller/online-courses/detail.js";



// lessonRoutes.get('/get', GetAllCourses);
lessonRoutes.get('/detail/:id',Auth, LectureDetail);
lessonRoutes.post('/create', Auth, CreateLesson);
// lessonRoutes.post('/edit/:id', Auth, EditCourse);
// lessonRoutes.delete('/delete/:id', Auth, DeleteCourse);


export default lessonRoutes;