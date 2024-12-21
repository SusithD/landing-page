import React, { useState } from 'react';
import logo from '../assets/logo.png';
import clsx from 'clsx';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <header className="bg-[#6B3CC9] text-white">
      <nav className="w-full mx-auto flex items-center justify-between p-[26px_80px] md:p-[26px_60px] lg:p-[26px_40px] sm:p-[26px_20px]">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="w-[239px] h-auto" />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-[28px]">
          <li><a href="#services" className="text-white hover:underline">Services</a></li>
          <li><a href="#about-us" className="text-white hover:underline">About Us</a></li>
          <li><a href="#contact-us" className="text-white hover:underline">Contact Us</a></li>
          <li><a href="#careers" className="text-white hover:underline">Careers</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Open Menu"
          aria-expanded={menuOpen ? 'true' : 'false'}
          aria-controls="mobile-menu"
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </button>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        id="mobile-menu"
        className={clsx(
          "fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col justify-start items-start p-8 transition-transform duration-300 ease-in-out z-50",  // Added z-50 to make sure it stays on top
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Close Button */}
        <button
          className="self-end mb-6"
          onClick={() => setMenuOpen(false)}
        >
          <svg
            className="h-6 w-6 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col space-y-6 text-lg font-medium">
          <li><a href="#home" className="text-black">Home</a></li>
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
