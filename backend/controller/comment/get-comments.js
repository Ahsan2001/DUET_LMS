import CommentDTO from "../../dto/comment.js";
import Comment from "../../models/comment.js";
import { commentByIdSchema } from "../../schema/comment.js";




export const GetComments =  async (req, res, next) => {

    const { error } = commentByIdSchema.validate(req.params);
      
        if (error) {
            return next(error)
        }

        const {_id} = req.params;

        let comments;

        try {
            comments = await Comment.find({ lessons: _id }).populate("author")
        } catch (error) {
            return next(error)
        }   

        let commentsDto = [];

        for( let i = 0; i < comments.length; i++){
            const Obj = new CommentDTO(comments[i]);
            commentsDto.push(Obj)
        }

        return res.status(201).json({ data: commentsDto })
}