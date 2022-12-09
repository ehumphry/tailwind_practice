import React, { useState } from 'react';

const HeaderMenu = () => {
  // Declare a new state variable to store the visibility of the dropdown
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-between px-4 py-2 bg-gray-900 text-gray-100 shadow-md">
      <div className="font-bold text-xl">People Work</div>
      <div className="hidden md:flex">
        <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-800">About</a>
        <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-800">Contact</a>
        <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-800">Careers</a>
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
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Careers</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;