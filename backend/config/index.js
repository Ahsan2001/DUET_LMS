
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONOGODB_CONNECTION_STRING = process.env.MONOGODB_CONNECTION_STRING;
const ACCESS_TOKEN_SECRECT = process.env.ACCESS_TOKEN_SECRECT;

export default {
  PORT,
  MONOGODB_CONNECTION_STRING,
  ACCESS_TOKEN_SECRECT
};
