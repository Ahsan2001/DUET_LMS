import jwt  from "jsonwebtoken";
import config from '../config/index.js';

const { ACCESS_TOKEN_SECRECT } = config;


class JWTService {

    static signAccessToken(payload, expiryTime) {
        return jwt.sign(payload, ACCESS_TOKEN_SECRECT, { expiresIn: expiryTime })
    }

    static verifyAccessToken(token) {
        return jwt.verify(token, ACCESS_TOKEN_SECRECT)
    }

}

export default JWTService;
