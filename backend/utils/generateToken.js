import crypto  from "crypto";


crypto.randomBytes(64).toString("hex");


// or 
// git bash 
// openssl rand -base64 32