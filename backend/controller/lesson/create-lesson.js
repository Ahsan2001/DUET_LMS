
import Course from "../../models/course.js";
import Lesson from "../../models/lesson.js";

export const CreateLesson = async (req, res, next) => {
    const { chapterNo, title, description, videoPath, courseId } = req.body;

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        const newLesson = new Lesson({
            chapterNo,
            title,
            description,
            videoPath
        });

        course.lessons.push(newLesson);
        await course.save();

        res.status(201).json({ message: "Lesson created successfully", lesson: newLesson });
    } catch (error) {
        return next(error);
    }
};