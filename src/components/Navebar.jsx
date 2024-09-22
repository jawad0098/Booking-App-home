"use client"; // Mark this as a Client Component

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import profilePic from '../../public/WebImage/daf-1.png'
export default function Navbar() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            className="h-8 w-auto"
            src={profilePic}
            alt="Logo"
            // height={50}
            // width={50}
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Contact
          </Link>
        </div>

        {/* Button */}
        <button
          className="text-white bg-red-600 px-4 py-2 rounded"
          onClick={handleClick}
        >
         Book Now
        </button>
      </div>

      {/* Mobile Links */}
      <div className="md:hidden">
        <Link href="/" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
          Home
        </Link>
        <Link href="/about" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
          About
        </Link>
        <Link href="/contact" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
          Contact
        </Link>
      </div>
    </nav>
  );
}
