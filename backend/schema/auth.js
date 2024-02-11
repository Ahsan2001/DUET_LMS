import Joi from "joi";

export const userSignup = Joi.object({
    first_name: Joi.string().min(3).max(30).required(),
    last_name: Joi.string().min(3).max(30).required(),
    phone: Joi.number().min(11).required(),
    email: Joi.string().email().required(),
    picture: Joi.string(),
    gender: Joi.string().valid('male', 'female').required(),
    address: Joi.string().min(3).max(30).required(),
    rollNo: Joi.number().min(3).max(30).required(),
    dept: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(8).max(25).required(),
    confirmPassword: Joi.ref("password")
})

export const userSignin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(25).required(),
})

export const forgetPassword = Joi.object({
    email: Joi.string().email().required(),
    phone: Joi.number().min(11).max(12).required(),
})

export const resetPassword = Joi.object({
    password: Joi.string().min(8).max(25).required(),
    confirmPassword: Joi.ref("password")
})

 
