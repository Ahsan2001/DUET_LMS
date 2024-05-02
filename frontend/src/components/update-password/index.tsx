import React, { useState } from "react";
import updatePassword from "../../schemas/update-password";
import { useFormik } from "formik";
import { UpdatePasswordFormValues } from "../../interface";

function UpdatePassword() {
    const [loading, setLoading] = useState(false);

    const handlePasswordUpdate = async (values: any) => {
        console.log(values);
        setLoading(true);
        // Simulate API call or other async operation
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Example async operation
        setLoading(false);
    };

    const { values, touched, handleChange, handleBlur, errors, handleSubmit } = useFormik<UpdatePasswordFormValues>({
        initialValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },

        validationSchema: updatePassword,

        onSubmit: async (values, action) => {
            console.log(values);
            await handlePasswordUpdate(values);
            action.resetForm();
        },
    });

    return (
        <form className="sm:col-span-1" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <div className="mb-6">
                <label htmlFor="password1" className="block mb-2 text-sm font-medium text-gray-900 text-white">Current Password</label>
                <div className="relative">
                    <input
                        value={values.currentPassword}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="password"
                        id="password1"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Current Password"
                    />
                    {errors.currentPassword && touched.currentPassword ? <p className='text-alert text-xs absolute inset-inline-start-0'>{errors.currentPassword}</p> : undefined}
                </div>
            </div>
            <div className="mb-6">
                <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900 text-white">New Password</label>
                <div className="relative">
                    <input
                        value={values.newPassword}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        // type="password"
                        id="password2"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter New Password"
                    />
                    {errors.newPassword && touched.newPassword ? <p className='text-alert text-xs absolute inset-inline-start-0'>{errors.newPassword}</p> : undefined}
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 text-white">Confirm password</label>
                <div className="relative">
                    <input
                        value={values.confirmPassword}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        // type="password"
                        id="confirm_password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Confirm Password"
                    />
                    {errors.confirmPassword && touched.confirmPassword ? <p className='text-alert text-xs absolute inset-inline-start-0'>{errors.confirmPassword}</p> : undefined}
                </div>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                {loading ? "Saving..." : "Save Changes"}
            </button>
        </form>
    );
}

export default UpdatePassword;
