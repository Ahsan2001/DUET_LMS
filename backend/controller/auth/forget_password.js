// import User from "../../models/user";
// import { forgetPassword } from "../../schema/auth";
// import nodemailer from "nodemailer";

// // Create a nodemailer transporter
// const transporter = nodemailer.createTransport({
//   // Provide your email service configuration here
//   service: 'gmail',
//   auth: {
//     user: 'ahsan2sabir@gmail.com',
//     pass: 'l30s3rv3r@'
//   }
// });

// export const ForgetPassword = async (req, res, next) => {
//   const { error } = forgetPassword.validate(req.body)

//   if (error) {
//     return next(error)
//   }

//   const { email } = req.body;

//   let user;
//   try {
//     user = await User.findOne({ email })
//     if (!user) {
//       return res.status(400).json({ message: "Invalid email" });
//     }

//     // Generate a unique token for password reset
//     const resetToken = generateResetToken();

//     // Store the reset token in the user document or a separate collection
//     // user.resetToken = resetToken;
//     // await user.save();

//     // Send email to the user with the reset link
//     const mailOptions = {
//       from: 'ahsan2sabir@gmail.com',
//       to: email,
//       subject: 'Password Reset Request',
//       text: `Hi ${user},\n\nPlease click on the following link to reset your password: ${resetToken}  you did not request this, please ignore this email and your password will remain unchanged.\n`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log("Error sending email: ", error);
//         return res.status(500).json({ message: "Failed to send reset password email" });
//       }
//       console.log("Reset password email sent: ", info.response);
//       return res.status(200).json({ message: "Reset password email sent successfully" });
//     });

//   } catch (error) {
//     return res.status(401).json({ message: "Invalid credentials", error: error.message });
//   }
// }

// // Function to generate a unique reset token (you can implement your own logic)
// function generateResetToken() {
//   // Implement your logic to generate a unique token here
//   return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
// }
