// import library 
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import assets 
import {  CreateNewCourse, Dashboard, ManageCourses, SignIn } from '../pages';
import ProtectedRoute from './protected';

const WebRoutes: React.FC = () => {
  const {auth} = useSelector((state:any) => state?.user);
  return (
    <BrowserRouter>
      <Routes> 
        {/* Public Routes  */}
        <Route path="/" element={<SignIn />} />
        <Route path="*" element={ <h1>Error page here</h1>} />
        
        {/* Private Routes  */}
        <Route path="/dashboard"  element={<ProtectedRoute isAuth={auth}><Dashboard /></ProtectedRoute>} />
        <Route path="/manage-courses"  element={<ProtectedRoute isAuth={auth}><ManageCourses /></ProtectedRoute>} />
        <Route path="/manage-courses/new"  element={<ProtectedRoute isAuth={auth}><CreateNewCourse /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRoutes;
