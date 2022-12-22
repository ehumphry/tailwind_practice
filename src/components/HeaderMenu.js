import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const HeaderMenu = () => {
  // Declare a new state variable to store the visibility of the dropdown
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-between px-10 py-5 bg-gray-900 text-gray-100 shadow-md">
      <Link className="font-bold text-3xl" to="/">People Work</Link>
      <div className="hidden md:flex">
        <Link className="px-3 py-2 text-xl rounded-md hover:bg-gray-800" to="/">Home</Link>
        <Link className="px-3 py-2 text-xl rounded-md hover:bg-gray-800" to="/about">About</Link>
        <Link className="px-3 py-2 text-xl rounded-md hover:bg-gray-800" to="/contact">Contact</Link>
        
      </div>
      <div className="md:hidden">
        {/* Use the path element in SVG to create a button with three horizontal lines */}
        <button
          className="px-3 py-2 rounded-md hover:bg-gray-500 text-white bg-gray-900"
          onClick={() => setDropdownVisibility(!isDropdownVisible)}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {/* Use the menu icon from the Material Design icons library */}
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
        {/* Use the isDropdownVisible state to control the visibility of the dropdown menu */}
        <div
          className={`absolute mt-2 -ml-20 origin-top-right rounded-md shadow-lg ${
            isDropdownVisible ? '' : 'hidden'
          }`}
          style={{ width: '50%' }}
        >
          <div className="py-1 rounded-md bg-white shadow-xs ">
            <Link className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100" to="/contact">Home</Link>
            <Link className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100" to="/about">About</Link>
            <Link className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100" to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;