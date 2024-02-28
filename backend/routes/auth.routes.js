import express from "express";
const authRoutes = express.Router();

// import controllers 
import {Signup} from "../controller/auth/signup.js";     
import {Signin} from "../controller/auth/signin.js";
// import {ForgetPassword} from "../controller/auth/forget_password.js";

authRoutes.post('/signup', Signup);
authRoutes.post('/signin', Signin);
// authRoutes.post('/forget', ForgetPassword)         
// authRoutes.post('/reset-password', resetPassword) 
// authRoutes.post('/logout', logout)   
// authRoutes.post('/logout', auth, authController.logout)    


export default authRoutes;