import mongoose from "mongoose";

const {Schema} = mongoose;

const CommentSchema = new Schema({
    author:  { type: mongoose.SchemaTypes.ObjectId, ref: "User"   },
    lecture:  { type: mongoose.SchemaTypes.ObjectId, ref: "OnlineLecture" },
    content: { type: String, require: true },
}, {
    timestamps: true
})


const Comment = mongoose.model("Comment", CommentSchema, "comments");
export default Comment;
