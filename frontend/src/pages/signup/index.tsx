import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignupFormValues } from '../../interface';
import SignUpSchema from '../../schemas/signup';
import { SignUpApi } from '../../api/internal';
import { Toast } from "../../components";
import { Flip, Slide, toast } from 'react-toastify'

const Signup: React.FC = () => {



  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();


  const handleSignup = async () => {
    setLoading(true);
    try {
      const data = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        phone: values.phone,
        rollNo: values.rollNo,
        dept: values.dept,
        gender: values.gender,
        address: values.address,
        password: values.password,
      };
      const response: any = await SignUpApi(data);
      if (response.status === 201) {
        setLoading(false);

        console.log(response)

        toast.success(response?.data?.message, {
          position: "bottom-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
        setTimeout(() => {
          navigate("/signin")
        }, 2000)
      } else {
        setLoading(false);
        toast.error(response?.response?.data?.message, {
          position: "bottom-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        });
      }
    }

    catch (error) {
      setLoading(false);
      toast.error("Something Went wrong please retry", {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
      console.log("An error occurred during SignUp:", error);
    }
  };


  const { values, touched, handleChange, handleBlur, errors, handleSubmit } = useFormik<SignupFormValues>({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      rollNo: "",
      dept: "",
      gender: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignUpSchema,

    onSubmit: async (values, action) => {
      console.log(values, "values")
      await handleSignup();
      action.resetForm()
    },
  })

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <img
            className="mx-auto h-24 w-auto"
            src="./logo.png"
            alt="Your Company"
          />
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up to your account
          </h2>
        </div>

        <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-lg">

          <div className="mt-2 grid grid-cols-1 md:grid-cols-2">
            <div className="mx-2 mt-5">
              <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2 relative">
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={values.first_name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder='Enter first name'
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.first_name && touched.first_name ? <p className='text-alert text-xs	absolute inset-inline-start-0'>{errors.first_name}</p> : undefined}
              </div>
            </div>

            <div className="mx-2 mt-5">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2 relative">
                <input
                  type="text"
                  value={values.last_name}
                  onBlur={handleBlur}
                  name="last_name"
                  placeholder='Enter last name'
                  onChange={handleChange}
                  id="last-name"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.last_name && touched.last_name ? <p className='text-alert text-xs	absolute inset-inline-start-0'>{errors.last_name}</p> : undefined}
              </div>
            </div>

            <div className="mx-2 mt-5">
              <label htmlFor="dept" className="block text-sm font-medium leading-6 text-gray-900">
                Department
              </label>
              <div className="mt-2 relative">
                <input
                  id="dept"
                  type="text"
                  placeholder='Enter your department'
                  value={values.dept}
                  name="dept"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.dept && touched.dept ? <p className='text-alert text-xs absolute inset-inline-start-0 mt-1'>{errors.dept}</p> : undefined}
              </div>
            </div>



            <div className="mx-2 mt-5">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Phone
              </label>
              <div className="mt-2 relative">
                <input
                  id="phone"
                  type="text"
                  value={values.phone}
                  placeholder='Enter phone number'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.phone && touched.phone ? <p className='text-alert text-xs	absolute inset-inline-start-0'>{errors.phone}</p> : undefined}
              </div>
            </div>

            <div className="mx-2 my-4 relative">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">Select Gender</legend>
                <div className="flex items-center mt-2 gap-x-6 ">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="male"
                      name="gender"
                      type="radio"
                      value="male"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      checked={values.gender === "male"}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="male" className="block text-sm font-medium leading-6 text-gray-900">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="female"
                      name="gender"
                      type="radio"
                      value="female"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      checked={values.gender === "female"}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="female" className="block text-sm font-medium leading-6 text-gray-900">
                      Female
                    </label>
                  </div>
                  {errors.gender && touched.gender ? <p className='text-alert text-xs absolute top-full	'>{errors.gender}</p> : undefined}
                </div>
              </fieldset>
            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 ">
            <div className="mx-2 mt-4">
              <label htmlFor="roll-no" className="block text-sm font-medium leading-6 text-gray-900">
                Roll No
              </label>
              <div className="mt-2">
                <input
                  id="roll-no"
                  type="text"
                  name="rollNo"
                  value={values.rollNo}
                  placeholder='Enter roll number'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.rollNo && touched.rollNo ? <p className='text-alert text-xs absolute inset-inline-start-0 mt-1'>{errors.rollNo}</p> : undefined}

              </div>
            </div>





            <div className="mx-2 mt-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2 relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  placeholder='Enter email address'
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && touched.email ? <p className='text-alert text-xs	absolute inset-inline-start-0'>{errors.email}</p> : undefined}
              </div>
            </div>


          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-2">
            <div className="mx-2  mt-5">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="password"
                  placeholder='Enter password'
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && touched.password ? <p className='text-alert text-xs absolute inset-inline-start-0 mt-1'>{errors.password}</p> : undefined}
                <div className='absolute top-2 right-2 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  }
                </div>
              </div>
            </div>
            <div className="mx-2  mt-5">
              <label htmlFor="confimPassword" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
              </label>
              <div className="mt-2 relative">
                <input
                  id="confimPassword"
                  type="password"
                  placeholder='Enter confirm password'
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.confirmPassword && touched.confirmPassword ? <p className='text-alert text-xs absolute inset-inline-start-0 mt-1'>{errors.confirmPassword}</p> : undefined}
              </div>
            </div>
          </div>


          <div className="grid grid-cols-1 mt-2">
            <div className="mx-2 my-4">
              <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                Address
              </label>
              <div className="mt-2 relative">
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder='Enter your address'
                  value={values.address}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.address && touched.address ? <p className='text-alert text-xs absolute inset-inline-start-0 mt-1'>{errors.address}</p> : undefined}
              </div>
            </div>

            <div className="mx-2 my-4">
              <button type="submit" onClick={(e) => handleSubmit()} className=" flex w-full uppercase tracking-wide  transition ease-in-out justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                {loading ? <div role="status">
                  <svg aria-hidden="true" className="w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div> : <span>Sign up</span>}
              </button>
            </div>
          </div>


          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account ?{' '}
            <Link to="/signin" className="font-semibold leading-6 text-primary hover:text-indigo-500">
              Sign In Now
            </Link>
          </p>
        </div>
      </div>
      <Toast />
    </>
  );
};

export default Signup;
