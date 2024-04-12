import express from "express";
const profileRoutes = express.Router();

import {ProfilePicture} from "../controller/profile/picture.js";     
import { ChangePassword } from "../controller/profile/password.js";

profileRoutes.put('/update-picture', ProfilePicture);
profileRoutes.put('/change-password', ChangePassword);

export default profileRoutes;