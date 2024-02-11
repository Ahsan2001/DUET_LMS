import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup, Signin, ForgetPassword, ResetPassword,NotFound, Dashboard } from '../pages';

const PublicRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashbaord" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
