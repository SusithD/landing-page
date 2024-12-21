import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#6B3CC9] text-white">
      <nav className="w-full mx-auto flex items-center justify-between p-[26px_80px] md:p-[26px_60px] lg:p-[26px_40px] sm:p-[26px_20px]">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="w-[238.89px] h-[25px]" />
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`md:flex space-x-[28px] ${menuOpen ? "block" : "hidden"}`}>
          <li><a href="#services" className="text-white hover:underline">Services</a></li>
          <li><a href="#about-us" className="text-white hover:underline">About Us</a></li>
          <li><a href="#contact-us" className="text-white hover:underline">Contact Us</a></li>
          <li><a href="#careers" className="text-white hover:underline">Careers</a></li>
        </ul>

        {/* Mobile Menu Toggle (Hamburger) */}
        <button
          aria-label="Open Menu"
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-[-201px] left-[-100%] w-[375px] h-[812px] bg-white p-[16px_20px] transition-all duration-300 ${menuOpen ? 'left-0' : ''}`}
      >
        <ul className="flex flex-col space-y-4">
          <li><a href="#services" className="text-black">Services</a></li>
          <li><a href="#about-us" className="text-black">About Us</a></li>
          <li><a href="#contact-us" className="text-black">Contact Us</a></li>
          <li><a href="#careers" className="text-black">Careers</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
