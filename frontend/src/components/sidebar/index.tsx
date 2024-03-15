// import library 
import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

// import assets 
import { navLink } from './content';
import { selectSidebarVisibility } from '../../redux/slices/sidebarSlice';



const Sidebar: React.FC = () => {
  const sidebarVisible = useSelector(selectSidebarVisibility);
  return (
    <>
      {sidebarVisible ? <div className="bg-white-800 text-white w-64 py-6 px-4">
        <img
          className="mx-auto h-24 w-auto"
          src="/logo.png"
          alt="Your Company"
        />
        <ul className="mt-6">
          {navLink.map((element, index) => {
            return (
              <NavLink
                key={index}
                to={element.path}
                className={({ isActive }) =>
                  isActive ? " bg-gray-800 rounded-xl border border-gray-800 p-3 mb-5 text-white gap-x-3 flex text-gray-700" :
                    "gap-x-3 flex mb-5 p-3 rounded-xl border border-gray-800 block text-gray-700 hover:bg-gray-800 hover:text-white"}>
                {element.icon}
                {element.title}
              </NavLink>
            )
          })}
        </ul>
      </div> : undefined}

    </>
  )
}


export default Sidebar
