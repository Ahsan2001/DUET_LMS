import { courseGetByIdSchema } from "../../schema/lectures.js";
import { v2 as cloudinary } from 'cloudinary';
import config from '../../config/index.js';
import Course from "../../models/course.js";
const { CLOUD_NAME,API_KEY,API_SECRET } = config;


// Cloudinary Configuration
cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
});


export const EditCourse = async (req, res, next) => {
    try {
        const { error } = courseGetByIdSchema.validate(req.params);
        if (error) {
            return next(error);
        }

        const { id } = req.params;
        const { coverPhoto, courseName } = req.body;

        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        if (coverPhoto && courseName) {
            const response = await cloudinary.uploader.upload(coverPhoto);
            course.coverPhoto = response.secure_url;
            course.courseName = courseName;
        } else if (courseName) {
            course.courseName = courseName;
        }

        await course.save();

        return res.status(200).json({ message: "Course updated successfully!" });
    } catch (error) {
        return next(error);
    }
};




