import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-purpleCustom text-white py-10 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="w-full md:w-1/3">
          <div>
            <img src={logo} alt="Logo" className="w-[238.89px] h-[25px]" />
          </div>
          <p className="text-sm mt-4">
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
      <div className="border-t border-purpleCustom/70 mt-8 pt-4 text-center text-sm">
        <span className="mr-2 cursor-pointer hover:underline">Privacy Policy</span>
        <span>|</span>
        <span className="ml-2 cursor-pointer hover:underline">Terms & Conditions</span>
      </div>
    </footer>
  );
};

export default Footer;
