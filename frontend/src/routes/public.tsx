import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup, Signin, ForgetPassword, ResetPassword,NotFound, Dashboard } from '../pages';
import PrivateRoute from './private';
import { useSelector } from 'react-redux';

const PublicRoutes: React.FC = () => {


  const isAuthenticated = useSelector((state:any) => state?.auth);
  console.log(isAuthenticated)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard"
          element={
            <PrivateRoute isAuth={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
