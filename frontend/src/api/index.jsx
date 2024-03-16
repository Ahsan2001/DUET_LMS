import axios from "axios";
import { BACKEND_API_URL } from "../utils/constant";


const api = axios.create({
  baseURL: BACKEND_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});


// Sign In Api
export const SignInApi = async (data) => {
  let response;
  try {
    response = await api.post("auth/signin", data);
  } catch (error) {
    return error;
  }
  return response;
};


// Sign Up Api
export const SignUpApi = async (data) => {
  let response;
  try {
    response = await api.post("auth/signup", data);
  } catch (error) {
    return error;
  }
  return response;
};


// Forget Api
export const ForgetApi = async (data) => {
  let response;
  try {
    response = await api.post("auth/forget", data);
  } catch (error) {
    return error;
  }
  return response;
};


// Log Out Api
export const LogoutApi = async() =>{
  let response;
  try {
    response = await api.get("auth/logout")
  } catch (error) {
    return error
  }
  return response
}


// Get All Courses
export const GetCoursesApi = async() =>{
  let response;
  try {
    response = await api.get("online-lectures/get")
  } catch (error) {
    return error
  }
  return response
}


// Get detail Courses
export const GetDetailCoursesApi = async(id) =>{
  let response;
  try {
    response = await api.get(`online-lectures/course/${id}`)
  } catch (error) {
    return error
  }
  return response
}

