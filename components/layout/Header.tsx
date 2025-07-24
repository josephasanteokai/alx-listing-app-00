// components/layout/Header.tsx

import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">ALX Listings</div>

      {/* Accommodation Types */}
      <nav className="space-x-4 hidden md:flex">
        <a href="#" className="text-gray-600 hover:text-blue-600">Rooms</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Mansion</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Countryside</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Apartments</a>
      </nav>

      {/* Search and Auth Buttons */}
      <div className="flex items-center space-x-3">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        />
        <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded">Sign In</button>
        <button className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
