import React from "react";
import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "../interface";

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuth, children }) => {
    if (isAuth) {
        return children;
    } else {
        return <Navigate to="/signin" />;
    }
};

export default PrivateRoute;