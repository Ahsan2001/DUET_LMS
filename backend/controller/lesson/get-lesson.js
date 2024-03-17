// import CourseDetailDTO from "../../dto/course-detail.js";
import LessonDetailDTO from "../../dto/lesson-detail.js";
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
        const lessonDTO = new LessonDetailDTO({
            author: {
                first_name: lesson.author.first_name,
                last_name: lesson.author.last_name,
                dept: lesson.author.dept,
                email: lesson.author.email,
                picture: lesson.author.picture
            },
            lessons: lesson.lessons
        });
        res.status(200).json({ message: 'Successfully fetch lesson detail', data: lessonDTO });
    } catch (error) {
        return next(error)
    }
}