import OnlineLecture from "../../models/onlineLectures.js";
import { courseGetByIdSchema } from "../../schema/lectures.js";


export const DeleteCourse = async (req, res, next) => {

    const {error} = courseGetByIdSchema.validate(req.params)
    
    if(error){
       return next(error);
    }

    const {id} = req.params;

    try {
        await OnlineLecture.deleteOne({_id: id});
        // await Comment.deleteMany({blog: id });
    } catch (error) {
        return next(error)
    }

    return res.status(200).json({ message: "Course deleted successfully!"});
}