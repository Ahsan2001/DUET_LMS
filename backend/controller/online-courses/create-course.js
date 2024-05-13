import Course from "../../models/course.js";
import { createLectureSchema } from "../../schema/lectures.js";
import { v2 as cloudinary } from 'cloudinary';
import config from '../../config/index.js';
import CourseDTO from "../../dto/course.js";
const { CLOUD_NAME,API_KEY,API_SECRET } = config;



// Cloudinary Configuration
cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
});


export const CreateCourse = async (req, res, next) => {
    const { error } = createLectureSchema.validate(req.body)
    if (error) {
        return next(error);
    }
    let response;
    let courses = [];
    const { title, author, description, videoPath, coverPhoto,courseName } = req.body;
    courses.push({
        title: title,
        videoPath: videoPath,
        description: description,
        chapterNo: 1
    });
    try {
        response = await cloudinary.uploader.upload(coverPhoto);
    } catch (error) {
        // console.log(error)
        return next(error);
    }
    let newCourse;
    try {
        newCourse = new Course({
            lessons: courses,
            author,
            courseName,
            coverPhoto: response?.secure_url,
        })
        await newCourse.save()
    } catch (error) {
        return next(error)
    }
    const CourseData = new CourseDTO( newCourse)
    res.status(201).json({ message: "Course uploaded successfull", CourseData })
}




