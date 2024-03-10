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
export const SignInApi = async (data: any) => {
  let response;
  try {
    response = await api.post("auth/signin", data);
  } catch (error) {
    return error;
  }
  return response;
};


// Course api 

export const CourseApi = async () => {
  let response;
  try {
    response = await api.get("/online-lectures/get");
  } catch (error) {
    return error;
  }
  return response;
}