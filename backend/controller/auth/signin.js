
import UserDTO from "../../dto/user.js";
import User from "../../models/user.js";
import {userSignin}  from "../../schema/auth.js";
import JWTService from "../../services/JWT.js";
import bcrypt from 'bcryptjs';

export const Signin = async (req,res,next) => {

    const { error } = userSignin.validate(req.body)

    if (error) {
        return next(error)
    }

    const { email, password } = req.body;
    let accessToken, user
    try {
        user = await User.findOne({email})
     
        if(!user){
            return res.status(400).json({message: "Invalid email"});
        } 
     
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        
        if(!isPasswordCorrect){
            return res.status(400).json({message: "Invalid password"});
        }

    } catch (error) {
        return res.status(401).json({ message: "Invalid credentials", error: error.message });
    }
    
   
    accessToken = JWTService.signAccessToken({ _id: user._id }, "30m");

    res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
    });

    const userDTO = new UserDTO(user);
    
    return res.status(201).json({ message: "Signin Successfull", user: userDTO, auth: true })
}