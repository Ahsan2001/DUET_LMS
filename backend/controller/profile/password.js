import User from "../../models/user.js";
import bcrypt from 'bcryptjs';

// Controller function to change user password
export const ChangePassword = async (req, res, next) => {
    try {
        const { email, currentPassword, newPassword } = req.body;

        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Current password is incorrect" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedNewPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedNewPassword;

        await user.save();

        return res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
        return next(error);
    }
};