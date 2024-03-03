import CourseDTO from "../../dto/course.js";
import OnlineLecture from "../../models/onlineLectures.js";



export const GetAllCourses = async (req, res, next) => {
    try {
        let Courses;
        Courses = await OnlineLecture.find({});

        const coursesDto = [];

        for (let i = 0; i < Courses.length; i++) {
            const dto = new CourseDTO(Courses[i]);
            coursesDto.push(dto);
        }

        return res.status(200).json({ message: "Course fetch successFully", coursesDto });
        
    } catch (error) {
        return next(error);
    }
}