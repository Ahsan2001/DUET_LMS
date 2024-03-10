import CourseDTO from "../../dto/course.js";
import Course from "../../models/course.js";



export const GetAllCourses = async (req, res, next) => {
    try {
        let Courses;
        Courses = await Course.find({}).populate("author");

        const coursesDato = [];

        for (let i = 0; i < Courses.length; i++) {
            const dto = new CourseDTO(Courses[i]);
            coursesDato.push(dto);
        }

        return res.status(200).json({ message: "Course fetch successFully", coursesDato });
        
    } catch (error) {
        return next(error);
    }
}