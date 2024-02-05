import mongoose from "mongoose";

import config from "./../config/index.js";
const { MONOGODB_CONNECTION_STRING } = config;


const dbconnect = async () => {
    try{
        const conn =  await mongoose.connect(MONOGODB_CONNECTION_STRING);
        console.log(`database connection success  ${conn.connection.host}`)
    }catch(error){
        console.log(`database connection failed ${error}`)
    }
} 

export default dbconnect;