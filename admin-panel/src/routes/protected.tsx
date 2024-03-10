// import library 
import React from "react";
import { Navigate } from "react-router-dom";

// import assets
import { ProtectedRouteProps } from "../interface";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuth, children }) => {
    if (isAuth) {
        return children;
    } else {
        return <Navigate to="/" />;
    }
};

export default ProtectedRoute;