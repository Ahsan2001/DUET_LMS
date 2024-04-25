// import library 
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import assets 
// import { AddNewLesson, CreateNewCourse, Dashboard, ManageCourses, SignIn } from '../pages';


const SignIn = React.lazy(() => import("../pages/signin") )
const AddNewLesson = React.lazy(() => import("../pages/new-lesson") )
const CreateNewCourse = React.lazy(() => import("../pages/new-course") )
const Dashboard = React.lazy(() => import("../pages/dashboard") )
const ManageCourses = React.lazy(() => import("../pages/manage-courses") )




import ProtectedRoute from './protected';

const WebRoutes: React.FC = () => {
  const { auth } = useSelector((state: any) => state?.user);
  return (
    <BrowserRouter>
      <Suspense fallback={<h1 className='mt-10 text-center text-2xl font-bold'>ruko zara sabr karo load horha hai abhi ...</h1>}>
        <Routes>
          {/* Public Routes  */}
          <Route path="/" element={<SignIn />} />
          <Route path="*" element={<h1>Error page here</h1>} />

          {/* Private Routes  */}
          <Route path="/dashboard" element={<ProtectedRoute isAuth={auth}><Dashboard /></ProtectedRoute>} />
          <Route path="/manage-courses" element={<ProtectedRoute isAuth={auth}><ManageCourses /></ProtectedRoute>} />
          <Route path="/manage-courses/new-course" element={<ProtectedRoute isAuth={auth}><CreateNewCourse /></ProtectedRoute>} />
          <Route path="/manage-courses/add-lesson" element={<ProtectedRoute isAuth={auth}><AddNewLesson /></ProtectedRoute>} />
          <Route path="/manage-courses/lesson/:id" element={<ProtectedRoute isAuth={auth}><AddNewLesson /></ProtectedRoute>} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default WebRoutes;
