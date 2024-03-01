import express from "express";
const authRoutes = express.Router();

import {Signup} from "../controller/auth/signup.js";     
import {Signin} from "../controller/auth/signin.js";
import {Logout} from "../controller/auth/logout.js"

authRoutes.post('/signup', Signup);
authRoutes.post('/signin', Signin);
authRoutes.post('/logout', Logout);

export default authRoutes;