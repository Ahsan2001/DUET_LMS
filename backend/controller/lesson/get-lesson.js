// import CourseDetailDTO from "../../dto/course-detail.js";
import Course from "../../models/course.js";
import { courseGetByIdSchema } from "../../schema/lectures.js"




export const LectureDetail = async (req, res, next) => {
    const { error } = courseGetByIdSchema.validate(req.params)
    if (error) {
        return next(error)
    }
    let lesson;
    const { id } = req.params;
    try {
        lesson = await Course.findOne({ 'lessons._id': id }, { 'lessons.$': 1 }).populate('author');
        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        // Return the lesson detail as a response
        res.status(200).json({ message: 'Successfully fetch lesson detail', lesson: lesson.lessons[0],author: lesson.author });
    } catch (error) {
        return next(error)
    }
}