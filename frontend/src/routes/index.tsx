import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './protected';
import { useSelector } from 'react-redux';

// import { Signup, Signin, ForgetPassword, ResetPassword,NotFound, Dashboard, Profile, OnlineLectures, LearningResources, Exam , Announcements, CourseDetail, CourseLectureDetail } from '../pages';

const Signup = React.lazy(() => import('../pages/signup'));
const Signin = React.lazy(() => import('../pages/signin'));
const ForgetPassword = React.lazy(() => import('../pages/forget-password'));
const ResetPassword = React.lazy(() => import('../pages/reset-password'));
const NotFound = React.lazy(() => import('../pages/not-found'));
const Dashboard = React.lazy(() => import('../pages/dashboard'));
const Profile = React.lazy(() => import('../pages/profile'));
const OnlineLectures = React.lazy(() => import('../pages/online-lectures'));
const LearningResources = React.lazy(() => import('../pages/learning-resources'));
const Exam = React.lazy(() => import('../pages/exam'));
const Announcements = React.lazy(() => import('../pages/announcements'));
const Classroom = React.lazy(()=> import('../pages/classroom'));
const CourseDetail = React.lazy(() => import('../pages/course'));
const CourseLectureDetail = React.lazy(() => import('../pages/lesson'));


const WebRoutes: React.FC = () => {

  const { auth } = useSelector((state: any) => state?.user);
  // let auth = true;
  

  return (
    <BrowserRouter>
    {/* fallback props should be fixed with logo loading  */}
      <Suspense fallback={<h1 className='mt-10 text-center text-2xl font-bold'>ruko zara sabr karo load horha hai abhi ...</h1>}>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<ProtectedRoute isAuth={auth}><Dashboard /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute isAuth={auth}><Profile /></ProtectedRoute>} />
          <Route path="/online-lectures" element={<ProtectedRoute isAuth={auth}><OnlineLectures /></ProtectedRoute>} />
          <Route path="/online-lectures/:title" element={<ProtectedRoute isAuth={auth}><CourseDetail /></ProtectedRoute>} />
          <Route path="/online-lectures/:title/:title" element={<ProtectedRoute isAuth={auth}><CourseLectureDetail /></ProtectedRoute>} />
          <Route path="/learning-resources" element={<ProtectedRoute isAuth={auth}><LearningResources /></ProtectedRoute>} />
          <Route path="/exam" element={<ProtectedRoute isAuth={auth}><Exam /></ProtectedRoute>} />
          <Route path="/announcements" element={<ProtectedRoute isAuth={auth}><Announcements /></ProtectedRoute>} />
          <Route path="/classroom" element={<ProtectedRoute isAuth={auth}><Classroom /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default WebRoutes;
