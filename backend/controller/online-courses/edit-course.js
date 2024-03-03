import OnlineLecture from "../../models/onlineLectures.js";
import { editLectureSchema } from "../../schema/lectures.js";
import { v2 as cloudinary } from 'cloudinary';
import config from '../../config/index.js';
const { CLOUD_NAME,API_KEY,API_SECRET } = config;


// Cloudinary Configuration
cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
});


export const EditCourse = async (req, res, next) => {
    const { error } = editLectureSchema.validate(req.body);

    if (error) {
        return next(error);
    }

    const { title, description,videoPath, coverPhoto, courseId, createdAt } = req.body;

    let course;

    try {
        course = await OnlineLecture.findOne({ _id: courseId });
      } catch (error) {
        return next(error);
      }
  
    if (coverPhoto) {

        let response;
        try {
            response = await cloudinary.uploader.upload(coverPhoto);
        } catch (error) {
            return next(error);
        }

        await OnlineLecture.updateOne({ _id: courseId}, 
            {
                coverPhoto: response.secure_url,
            }
        )
    }

    else {
        await OnlineLecture.updateOne({ _id: courseId }, { title, description,videoPath });
      }
  
    return res.status(200).json({ message: "Course updated successfully!" });
}




