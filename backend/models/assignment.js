import mongoose from "mongoose";

const {Schema} = mongoose;

const assignmentSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    submissions: [{
        student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        file: { type: String },
        marks: { type: Number }
    }]
}, { timestamps: true });


const Assignment = mongoose.model("Assignment", assignmentSchema, "Assignments");
export default Assignment;
