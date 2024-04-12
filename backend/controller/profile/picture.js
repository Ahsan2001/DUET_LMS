import User from "../../models/user.js";
import { v2 as cloudinary } from 'cloudinary';
import config from '../../config/index.js';
const { CLOUD_NAME, API_KEY, API_SECRET } = config;

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
});

export const ProfilePicture = async (req, res, next) => {
    try {

        const { profilePictureUrl, email } = req.body;

        const user = await User.findOne({email});

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }


        const response = await cloudinary.uploader.upload(profilePictureUrl);
        user.picture = response.secure_url;

        await user.save();

        return res.status(200).json({ message: "Profile picture updated successfully", user });
        
    } catch (error) {
        return next(error);
    }
};