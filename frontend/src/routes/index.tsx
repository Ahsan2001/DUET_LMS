import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './protected';
import { useSelector } from 'react-redux';
import { Spinner } from '../components';

// import { Signup, Signin, ForgetPassword, ResetPassword,NotFound, Profile, OnlineLectures, LearningResources, Exam , Announcements, CourseDetail, CourseLectureDetail } from '../pages';

const Signup = React.lazy(() => import('../pages/signup'));
const Signin = React.lazy(() => import('../pages/signin'));
const ForgetPassword = React.lazy(() => import('../pages/forget-password'));
const ResetPassword = React.lazy(() => import('../pages/reset-password'));
const NotFound = React.lazy(() => import('../pages/not-found'));
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
  

  return (
    <BrowserRouter>
      <Suspense fallback={ <Spinner />}>
        <Routes>
       
          <Route element={<ProtectedRoute  user={!auth}  redirect="/" /> } >
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>


          <Route element={<ProtectedRoute  user={auth}  redirect="/signin" />} >
            <Route path="/" element={<Profile />} />
            <Route path="/online-lectures" element={<OnlineLectures />} />
            <Route path="/online-lectures/:title" element={<CourseDetail />} />
            <Route path="/online-lectures/:title/:title" element={<CourseLectureDetail />} />
            <Route path="/learning-resources" element={<LearningResources />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/classroom" element={<Classroom />} />
          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>

      </Suspense>
    </BrowserRouter>
  );
};

export default WebRoutes;
