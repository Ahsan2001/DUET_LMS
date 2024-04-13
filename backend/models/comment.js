import mongoose from "mongoose";

const {Schema} = mongoose;

const CommentSchema = new Schema({
    author:  { type: mongoose.SchemaTypes.ObjectId, ref: "User"   },
    lesson:  { type: mongoose.SchemaTypes.ObjectId, ref: "Course" },
    content: { type: String, required: true },
}, {
    timestamps: true
})


const Comment = mongoose.model("Comment", CommentSchema, "Comments");
export default Comment;
