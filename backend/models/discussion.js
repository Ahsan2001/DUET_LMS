import mongoose from "mongoose";

const {Schema} = mongoose;


const discussionSchema = new Schema({
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comments: [{
        content: { type: String, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        createdAt: { type: Date, default: Date.now }
    }]
}, { timestamps: true });


const Discussion = mongoose.model("Discussion", discussionSchema, "Discussions");
export default Discussion;