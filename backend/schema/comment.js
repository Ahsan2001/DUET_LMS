import Joi from "joi";

const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;

export const commentSchema = Joi.object({
    content: Joi.string().required(),
    author: Joi.string().regex(mongodbIdPattern).required(),
    lesson: Joi.string().regex(mongodbIdPattern).required(),
})


export const commentByIdSchema = Joi.object({
    id: Joi.string().regex(mongodbIdPattern).required(),
})

