import React from 'react';
import heroImage from '../assets/hero-image.jpg'; // Ensure to replace this with your actual image path

const HeroSection = () => {
  return (
    <section className="relative w-full h-[700px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      {/* Hero Image */}

      {/* Overlay Text Container */}
      <div className="absolute top-[354px] left-[80px] w-[630px] p-[24px_40px_32px_40px] bg-gradient-to-r from-[#1CBDDD] to-[#4DCA79] text-white">
        <h1 className="text-3xl font-semibold">
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>
        <p className="mt-4 text-lg">Get free consultation</p>
        <button className="mt-4 px-6 py-3 bg-white text-[#1CBDDD] font-bold rounded-md hover:bg-[#e0f7fa] transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
