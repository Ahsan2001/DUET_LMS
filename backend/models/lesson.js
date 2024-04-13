import mongoose from "mongoose";

const {Schema} = mongoose;

export const lessonSchema = new Schema({
    chapterNo: { type: Number, required: true }, 
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoPath: { type: String, required: true }, 
},

{
    timestamps: true
})


const Lesson = mongoose.model("Lesson", lessonSchema, "Lessons");
export default Lesson;
