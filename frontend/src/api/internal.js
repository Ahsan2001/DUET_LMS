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
