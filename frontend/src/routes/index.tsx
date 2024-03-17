import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup, Signin, ForgetPassword, ResetPassword,NotFound, Dashboard, Profile, OnlineLectures, LearningResources, Exam , Announcements, CourseDetail, CourseLectureDetail } from '../pages';
import ProtectedRoute from './protected';
import { useSelector } from 'react-redux';

const WebRoutes: React.FC = () => {

  const {auth} = useSelector((state:any) => state?.user);
  // let auth = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard"  element={<ProtectedRoute isAuth={auth}><Dashboard /></ProtectedRoute>} />
        <Route path="/profile"  element={<ProtectedRoute isAuth={auth}><Profile /></ProtectedRoute>} />        
        <Route path="/online-lectures"  element={<ProtectedRoute isAuth={auth}><OnlineLectures /></ProtectedRoute>} />
        <Route path="/online-lectures/:title"  element={<ProtectedRoute isAuth={auth}><CourseDetail /></ProtectedRoute>} />
        <Route path="/online-lectures/:title/:title"  element={<ProtectedRoute isAuth={auth}><CourseLectureDetail /></ProtectedRoute>} />
        <Route path="/learning-resources"  element={<ProtectedRoute isAuth={auth}><LearningResources /></ProtectedRoute>} />
        <Route path="/exam"  element={<ProtectedRoute isAuth={auth}><Exam /></ProtectedRoute>} />
        <Route path="/announcements"  element={<ProtectedRoute isAuth={auth}><Announcements /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRoutes;
