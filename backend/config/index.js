
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONOGODB_CONNECTION_STRING = process.env.MONOGODB_CONNECTION_STRING;
const ACCESS_TOKEN_SECRECT = process.env.ACCESS_TOKEN_SECRECT;
const CLOUD_NAME = process.env.CLOUD_NAME;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

export default {
  PORT,
  MONOGODB_CONNECTION_STRING,
  ACCESS_TOKEN_SECRECT,
  API_KEY,
  API_SECRET,
  CLOUD_NAME
};
