import {userSignup}  from "../../schema/auth.js";
import User from "../../models/user.js";
import JWTService from "../../services/JWT.js"
import bcrypt from 'bcryptjs';
import UserDTO from "../../dto/user.js";


export const Signup = async (req, res, next) => {

    const { error } = userSignup.validate(req.body)

    if (error) {
        return next(error)
    }

    const { email , phone , first_name , last_name , password , address , rollNo, dept , gender } = req.body;

    try {
        const emailInUse = await User.exists({ email });
        const phoneInUse = await User.exists({ phone });
        const rollNoInUse = await User.exists({ rollNo });

        if (emailInUse) {
            return res.status(409).json({ message: "Email already registered, contact with IT Department !" })
        }

        if (phoneInUse) {
            return res.status(409).json({ message: "Phone Number already registered, contact with IT Department !" })
        }

        if (rollNoInUse) {
            return res.status(409).json({ message: "Roll Number already registered, contact with IT Department !" })
        }

    } catch (error) {
        return next(error)
    }

    // Secure Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)


    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${first_name}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${first_name}`;


    const profilePicture = gender === "male" ? boyProfilePic : girlProfilePic;

    let accessToken,user
    try {
        const userToRegister = new User({
            email,
            phone,
            first_name,
            last_name,
            address,
            gender,
            dept,
            rollNo,
            picture: profilePicture,
            password: hashPassword
        })

        user = await userToRegister.save()
        accessToken = JWTService.signAccessToken({ _id: user._id }, "30m");
    }
    catch (error) {
        return next(error);
    }

    res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
    });


    const userDTO = new UserDTO(user);
    return res.status(201).json({ message: "Signup Successfull",user: userDTO, auth: true })
}
