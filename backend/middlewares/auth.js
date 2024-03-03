import User from '../models/user.js';
import UserDto from '../dto/user.js';
import JWTService from '../services/JWT.js';

const Auth = async (req, res, next) => {

    try {
        const { accessToken } = req.cookies;

        if (!accessToken) {
            const error = {
                status: 401,
                message: 'Unauthorized'
            }
            return next(error)
        }

        let _id;

        try {
            _id = JWTService.verifyAccessToken(accessToken)._id;
        }
        catch (error) {
            return next(error);
        }

        let user;

        try {
            user = await User.findOne({ _id: _id });
        }
        catch (error) {
            return next(error);
        }

        const userDto = new UserDto(user);

        req.user = userDto;

        next();

    }

    catch (error) {
        return next(error);
    }
}

export default Auth;