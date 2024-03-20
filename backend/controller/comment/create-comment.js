import { commentSchema } from "../../schema/comment";
import Comment from "../../models/comment"

export const CreateComment = async (req, res, next) => {
    const { error } = commentSchema.validate(req.body);

    if (error) {
        return next(error)
    }

    const { author, lesson, content } = req.body;

    try {
        const newComment = new Comment({
            author, lesson, content
        })

        await newComment.save()

    } catch (error) {
        return next(error)
    }

    return res.status(201).json({ message: "Comment Created successfully!" })

}