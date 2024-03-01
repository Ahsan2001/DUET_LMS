import CourseDTO from "../../dto/course.js";
import OnlineLecture from "../../models/onlineLectures.js";
import { createLectureSchema } from "../../schema/lectures.js";
import cloudinary from "cloudinary";
import config from '../../config/index.js';
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
    const { title, author, description, videoPath, coverPhoto } = req.body;
    try {
        response = await cloudinary.uploader.upload(coverPhoto);
    } catch (error) {
        return next(error);
    }
    let newLecture;
    try {
        newLecture = new OnlineLecture({
            title,
            author,
            description,
            videoPath,
            coverImage: response.url,
        })
        await newLecture.save()
    } catch (error) {
        return next(error)
    }
    const lecture = new CourseDTO(newLecture)
    res.status(201).json({ lecture })
}




