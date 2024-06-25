import React from 'react'
import { SignupInputsValues } from '../../interface'

const Inputs: React.FC<SignupInputsValues> = ({ label, HtmlForId, handleBlur, handleChange, values, errors, touched }) => {
    return (
      <>
        <label htmlFor={HtmlForId} className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="mt-1 relative">
          <input
            type="text"
            id={HtmlForId}
            name={HtmlForId}
            value={values}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder={`Enter ${label.toLowerCase()}`}
            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {errors || touched ? (
            <p className="text-alert text-xs absolute inset-inline-start-0">{errors}</p>
          ) : undefined}
        </div>
      </>
    );
  }

export default Inputs