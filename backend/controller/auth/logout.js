export const Logout = async(req, res, next) => {
    res.clearCookie("accessToken");
    res.status(200).json({ user: null, auth: false });
}