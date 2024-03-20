import express from "express";
const commentRoutes = express.Router();



import Auth from "../middlewares/auth.js";
import { CreateComment } from "../controller/comment/create-comment.js";
import { GetComments } from "../controller/comment/get-comments.js";



commentRoutes.post('/new-comment', Auth, CreateComment);
commentRoutes.get('/get-comment/:id', Auth, GetComments);

export default commentRoutes;