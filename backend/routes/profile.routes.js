import express from "express";
const profileRoutes = express.Router();

import {ProfilePicture} from "../controller/profile/picture.js";     
import { ChangePassword } from "../controller/profile/password.js";

profileRoutes.post('/update-picture', ProfilePicture);
profileRoutes.post('/change-password', ChangePassword);

export default profileRoutes;