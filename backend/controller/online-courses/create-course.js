import CourseDTO from "../../dto/course.js";
import OnlineLecture from "../../models/onlineLectures.js";
import { createLectureSchema } from "../../schema/lectures.js";
import { v2 as cloudinary } from 'cloudinary';
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
    let response
    const { title, author, description, videoPath, coverPhoto } = req.body;
    try {
        response = await cloudinary.uploader.upload(coverPhoto);
    } catch (error) {
        console.log(error)
        return next(error);
    }
    let newLecture;
    try {
        newLecture = new OnlineLecture({
            title,
            author,
            description,
            videoPath,
            coverPhoto: response?.secure_url,
        })
        
        await newLecture.save()
    } catch (error) {
        return next(error)
    }
    const lecture = new CourseDTO( newLecture)
    res.status(201).json({ message: "Course uploaded successfull", lecture })
}




