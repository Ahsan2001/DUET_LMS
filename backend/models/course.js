import mongoose from "mongoose";

const {Schema} = mongoose;

const lessonDataStructure = new Schema({
    chapterNo: { type: Number, required: true }, 
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoPath: { type: String, required: true }, 
});

const courseSchema = new Schema({
    coverPhoto : {type: String, require: true},
    author: {type: mongoose.SchemaTypes.ObjectId, ref: "User"},
    courseName: {type: String, require: true},
    lessons: [lessonDataStructure]
}, 
{
    timestamps: true
})


const Course = mongoose.model("Course", courseSchema, "Courses");
export default Course;
