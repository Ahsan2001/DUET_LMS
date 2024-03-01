import mongoose from "mongoose";

const {Schema} = mongoose;

const OnlineLectureSchema = new Schema({
    title : {type: String, require: true},
    description : {type: String, require: true},
    videoPath : {type: String, require: true},
    coverPhoto : {type: String, require: true},
    author: {type: mongoose.SchemaTypes.ObjectId, ref: "User"},
}, 
{
    timestamps: true
})


const OnlineLecture = mongoose.model("OnlineLecture", OnlineLectureSchema, "OnlineLectures");
export default OnlineLecture;
