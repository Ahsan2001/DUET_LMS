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

// Logout Api 
export const LogoutApi = async () => {
  let response;
  try {
    response = await api.post("auth/logout");
  } catch (error) {
    return error;
  }
  return response;
};

// Course api 
export const GetAllCoursesApi = async () => {
  let response;
  try {
    response = await api.get("/online-lectures/get");
  } catch (error) {
    return error;
  }
  return response;
}

// Delete Course Api
export const DeleteCoursesApi = async (id: Number) => {
  let response;
  try {
    response = await api.delete(`/online-lectures/delete/${id}`);
  } catch (error) {
    return error
  }
  return response;
}