import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { navLink } from './content';

const Sidebar: React.FC = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="bg-white-800 text-white w-64 py-6 px-4">
        <img
          className="mx-auto h-24 w-auto"
          src="./logo.png"
          alt="Your Company"
        />
        <ul className="mt-6">
          {navLink.map((element, index) => {
            return (
              <NavLink
                key={index}
                to={element.path}
                className={({ isActive }) =>
                  isActive ? " bg-gray-800 rounded-xl border p-3 mb-5 text-white gap-x-3 flex text-gray-700" :
                    "gap-x-3 flex mb-5 p-3 rounded-xl border block text-gray-700 hover:bg-gray-800 hover:text-white"}>
                {element.icon}
                {element.title}
              </NavLink>
            )
          })}
        </ul>
      </div>

      <div className="md:hidden" id="hamburger">
        <button className="block text-gray-500 hover:text-white focus:text-white focus:outline-none" onClick={toggleMenu}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </>
  )
}


export default Sidebar
