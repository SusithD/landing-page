import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="text-white py-10 mt-10" style={{ backgroundColor: '#6B3CC9' }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-3 flex items-center">
            <span className="mr-2">
              {/* Logo */}
              <img 
                src={logo} 
                alt="AT Digital Logo" 
                className="w-[239px] h-auto" 
              /> 
            </span>
          </h2>
          <p className="text-sm">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>

        {/* Middle Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-bold mb-3">Our Technologies</h3>
          <ul className="space-y-2 text-sm">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-bold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-purple-600 mt-8 pt-4 text-center text-sm">
        <span className="mr-2">Privacy Policy</span>
        <span>|</span>
        <span className="ml-2">Terms & Conditions</span>
      </div>
    </footer>
  );
};

export default Footer;
