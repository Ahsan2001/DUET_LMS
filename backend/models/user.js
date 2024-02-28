import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    first_name: {type:String, require: true},
    last_name: {type:String, require: true},
    email: {type:String, require: true,unique: true },
    phone: {type:String, require: true,unique: true },
    rollNo: {type:String, require: true,unique: true },
    dept: {type:String, require: true },
    picture: {type:String},
    password: {type:String, require: true},
    gender: {type:String, enum: ['male','female'], default: ''},
    address: {type:String, require: true},
},

{   
    timestamps: true,
})



const User = mongoose.model("User", userSchema, "users");

export default User;
