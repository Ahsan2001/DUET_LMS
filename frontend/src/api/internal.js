import axios from "axios";
import { REACT_APP_INTERNAL_API_PATH } from "../utils/constant";


const api = axios.create({
  baseURL: REACT_APP_INTERNAL_API_PATH,
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
