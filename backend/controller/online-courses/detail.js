import CourseDetailDTO from "../../dto/course-detail.js";
import OnlineLecture from "../../models/onlineLectures.js";
import { courseGetByIdSchema } from "../../schema/lectures.js"




export const Detail = async (req, res, next) => {


    const { error } = courseGetByIdSchema.validate(req.params)

    if (error) {
        return next(error)
    }

    let course;

    const { id } = req.params;


    try {
        course = await OnlineLecture.findOne({ _id: id }).populate("author")
    } catch (error) {
        return next(error)
    }
    const coursedetails = new CourseDetailDTO(course);
    res.status(200).json({ message: "successfully fetch course detail", coursedetails })
}