import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Toast } from '../../components';
// import { Flip, Slide, toast } from 'react-toastify';
// import { ForgetApi } from '../../api/internal';
import { useFormik } from 'formik';
import { ForgetFormValues } from '../../interface';
import ForgetSchema from '../../schemas/forget';

const ForgetPassword: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(false);

  const handleForgetPassword = async () => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
      alert(" working on forget functionality the feature is not completed yet")
    },2000)
    // try {
    //   const data = {
    //     email: values.email,
    //   };
    //   const response: any = await ForgetApi(data);
    //   if (response.status === 201) {
    //     toast.success(response?.data?.message, {
    //       position: "bottom-right",
    //       autoClose: false,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //       transition: Slide,
    //     });
    //     setLoading(false);
    //   } else {
    //     setLoading(false);
    //     toast.error(response?.response?.data?.message, {
    //       position: "bottom-right",
    //       autoClose: false,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //       transition: Flip,
    //     });
    //   }
    // }

    // catch (error) {
    //   setLoading(false);
    //   toast.error("Something Went wrong please retry", {
    //     position: "bottom-right",
    //     autoClose: false,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     transition: Flip,
    //   });
    //   console.log("An error occurred during login:", error);
    // }
  };


  const { values, touched, handleChange, handleBlur, errors, handleSubmit } = useFormik<ForgetFormValues>({
    initialValues: {
      email: "",
    },

    validationSchema: ForgetSchema,
    onSubmit: async (values, action) => {
      await handleForgetPassword();
      action.resetForm()
    },
  })



  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-24 w-auto"
            src="./logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Recover your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder='Enter email address'
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
                {errors.email && touched.email ? <p className='text-alert text-xs	absolute inset-inline-start-0'>{errors.email}</p> : undefined}
              </div>
            </div>

            <div className='mt-8'> 
            <button type="submit" onClick={(e) => handleSubmit() } 
                className="flex w-full uppercase tracking-wide  transition ease-in-out  justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                {loading ? <div role="status">
                  <svg aria-hidden="true" className="w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div> : <span> Send password reset email</span>}
              </button>
            </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Go to  <Link to="/signin" className="font-semibold leading-6 text-primary hover:text-indigo-500">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>

  );
};

export default ForgetPassword;
