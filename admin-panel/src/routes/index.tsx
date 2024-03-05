import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  SignIn } from '../pages';
// import ProtectedRoute from './protected';
// import { useSelector } from 'react-redux';

const WebRoutes: React.FC = () => {
  // const {auth} = useSelector((state:any) => state?.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        {/* <Route path="/dashboard"  element={<ProtectedRoute isAuth={auth}><h1>dashbaord page here</h1></ProtectedRoute>} /> */}
        <Route path="/dashboard"  element={<h1>dashbaord page here</h1>} />
        <Route path="*" element={ <h1>Error page here</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRoutes;
