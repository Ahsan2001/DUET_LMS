import React, { useState } from "react";
import updatePasswordSchemas from "../../schemas/update-password";
import { useFormik } from "formik";
import { UpdatePasswordFormValues } from "../../interface";
import { UpdateUserPassword } from "../../api";
import { Slide, toast } from "react-toastify";
import { useSelector } from "react-redux";

function UpdatePassword() {

    const data = useSelector((state: any) => state?.user);

    const handlePasswordUpdate = async (values: any) => {
        const apiData = {
            email : data?.email,
            currentPassword:  values.currentPassword,
            newPassword: values.newPassword
        }

        const response: any = await UpdateUserPassword(apiData);
            if (response.status === 200) {
                toast.success(response?.data?.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
            } else {
                toast.error(response?.data?.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
            }
    } 
  
    const { values, touched, handleChange, handleBlur, errors, handleSubmit } = useFormik<UpdatePasswordFormValues>({
      initialValues: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
  
      validationSchema: updatePasswordSchemas,
      onSubmit: async (values, {resetForm}) => {
        handlePasswordUpdate(values);
        resetForm();
      },
    });
  

    return (
        <form className="sm:col-span-1" onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 text-white">Current Password</label>
                <div className="relative">
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="password"
                        name="currentPassword"
                        className="border  text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        value={values.currentPassword}
                        placeholder="Enter Current Password"
                    />
                    {errors.currentPassword && touched.currentPassword ? <p className='text-alert text-xs absolute inset-inline-start-0'>{errors.currentPassword}</p> : undefined}
                </div>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 text-white">New Password</label>
                <div className="relative">
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="password"
                        name="newPassword"
                        className="border  text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        value={values.newPassword}
                        placeholder="Enter New Password"
                    />
                    {errors.newPassword && touched.newPassword ? <p className='text-alert text-xs absolute inset-inline-start-0'>{errors.newPassword}</p> : undefined}
                </div>
            </div>

            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 text-white">Confirm password</label>
                <div className="relative">
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="password"
                        name="confirmPassword"
                        className="border  text-gray-900  focus:outline-none text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        value={values.confirmPassword}
                        placeholder="Enter Confirm Password"
                    />
                    {errors.confirmPassword && touched.confirmPassword ? <p className='text-alert text-xs absolute inset-inline-start-0'>{errors.confirmPassword}</p> : undefined}
                </div>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                {/* {loading ? "Saving..." : "Save Changes"} */}
            Save</button>
        </form>
    );
}

export default UpdatePassword;
