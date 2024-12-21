import React from 'react';
import heroImage from '../assets/hero-image.jpg'; // Replace with your actual image path

const HeroSection = () => {
  return (
    <section
      className="
        relative 
        w-full 
        h-[700px] 
        bg-cover 
        bg-center
      "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay Text Container */}
      <div
        className="
          absolute 
          left-0 
          bottom-0 
          md:top-[354px] 
          lg:top-[354px] 
          w-full 
          md:w-[630px] 
          lg:w-[622px] 
          p-6 
          md:px-10 
          md:py-8 
          bg-gradient-to-r 
          from-[#1CBDDD] 
          to-[#4DCA79] 
          text-white 
          h-auto 
          lg:h-[306px] 
          md:left-20 
          lg:left-16
        "
      >
        {/* Heading */}
        <h1
          className="
            font-bold 
            tracking-tight 
            text-left 
            text-3xl 
            md:text-4xl 
            leading-tight 
            font-inter 
            mb-4
          "
        >
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>

        {/* Button */}
        <button
          className="
            mt-4 
            px-6 
            py-3 
            bg-orangeCustom 
            text-white 
            font-bold 
            rounded-tl-md 
            rounded-br-md 
            hover:bg-orangeCustomHover 
            transition 
            duration-300
          "
        >
          Get free consultation
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
