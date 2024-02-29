import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup, Signin, ForgetPassword, ResetPassword,NotFound, Dashboard, Profile, OnlineLectures, LearningResources, Exam , Announcements, Logout } from '../pages';
import PrivateRoute from './private';
import { useSelector } from 'react-redux';

const PublicRoutes: React.FC = () => {

  const data = useSelector((state:any) => state?.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard"  element={<PrivateRoute isAuth={data?.auth}><Dashboard /></PrivateRoute>} />
        <Route path="/profile"  element={<PrivateRoute isAuth={data?.auth}><Profile /></PrivateRoute>} />        
        <Route path="/online-lectures"  element={<PrivateRoute isAuth={data?.auth}><OnlineLectures /></PrivateRoute>} />
        <Route path="/learning-resources"  element={<PrivateRoute isAuth={data?.auth}><LearningResources /></PrivateRoute>} />
        <Route path="/exam"  element={<PrivateRoute isAuth={data?.auth}><Exam /></PrivateRoute>} />
        <Route path="/announcements"  element={<PrivateRoute isAuth={data?.auth}><Announcements /></PrivateRoute>} />
        <Route path="/logout"  element={<PrivateRoute isAuth={data?.auth}><Logout /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
