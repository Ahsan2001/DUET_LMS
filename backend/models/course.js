import mongoose from "mongoose";
import { lessonSchema } from "./lesson.js";

const {Schema} = mongoose;

const courseSchema = new Schema({
    coverPhoto : {type: String, require: true},
    author: {type: mongoose.SchemaTypes.ObjectId, ref: "User"},
    courseName: {type: String, require: true},
    lessons: [lessonSchema ]
}, 
{
    timestamps: true
})

const Course = mongoose.model("Course", courseSchema, "Courses");
export default Course;
