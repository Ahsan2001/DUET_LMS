import { ProtectedRouteProps } from "../interface";
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoute: React.FC<ProtectedRouteProps>  = (props) => {
    const {children, user, redirect} = props;
    if (!user) {
        return <Navigate to={redirect}  />
    }
    return children ? children : <Outlet />
}

export default ProtectedRoute