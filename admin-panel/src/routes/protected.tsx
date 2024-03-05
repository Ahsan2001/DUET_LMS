import React from "react";
import { Navigate } from "react-router-dom";
import { ProtectedRouteProps } from "../interface";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuth, children }) => {
    if (isAuth) {
        return children;
    } else {
        return <Navigate to="/signin" />;
    }
};

export default ProtectedRoute;