import Joi from "joi";

const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;

export const createLectureSchema =  Joi.object({
    title: Joi.string().required(),
    author: Joi.string().regex(mongodbIdPattern).required(),
    description: Joi.string().required(),
    videoPath: Joi.string().required(),
    coverPhoto: Joi.string().required(),
    courseName: Joi.string().required(),
})



export const editLectureSchema =  Joi.object({
    coverPhoto: Joi.string().required(),
    courseName: Joi.string().required(),
})


export const courseGetByIdSchema = Joi.object({
    id: Joi.string().regex(mongodbIdPattern).required()
})