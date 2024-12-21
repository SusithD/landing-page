import React from 'react';
import secondFrameImage from '../assets/second-frame-image.jpg'; // Replace with your actual image path

const FrameSectionSecond = () => {
  return (
    <section
      className="
        relative 
        w-full 
        max-w-[1064px] 
        mx-auto 
        mt-[60px] 
        flex flex-col 
        sm:flex-row-reverse  /* Reverse flex direction for the image on the right */
        sm:items-center 
        gap-[40px] 
        sm:gap-[108px] 
        opacity-100
      "
    >
      {/* Image Section */}
      <div
        className="
          flex-shrink-0 
          w-full 
          sm:w-[414px] 
          h-[414px] 
          sm:h-[414px]
          mb-6 
          sm:mb-0
          flex justify-center  /* Center the image on mobile */
        "
      >
        <img
          src={secondFrameImage}
          alt="Frame"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div
        className="
          w-full 
          sm:w-[542px] 
          h-auto 
          flex flex-col justify-start 
          text-left 
          px-4
          text-center sm:text-left  /* Center text on mobile, left-align on larger screens */
        "
      >
        {/* Title */}
        <h2
          className="
            font-poppins 
            text-[27px] 
            font-semibold 
            leading-[33px] 
            tracking-[0.4px] 
            text-[#6B3CC9] 
            mb-4 
            text-center sm:text-left  /* Center title on mobile, left-align on larger screens */
          "
        >
          Digital Strategy Consulting
        </h2>

        {/* Description */}
        <p
          className="
            text-[16px] 
            leading-[24px] 
            text-[#333333]
            mb-6
            text-center sm:text-left  /* Center text on mobile, left-align on larger screens */
          "
        >
          Your digital strategy should complement the overall marketing strategy of the company. 
          In online marketing, each component will never work in isolation, and every business needs 
          a different mix. We provide a clear concept and strategic overview to find the most efficient 
          model for your business.
        </p>

        {/* Button */}
        <button
          className="
            mt-3 
            px-4 py-2 
            bg-[#F28D35] 
            text-white 
            font-bold 
            rounded-md 
            hover:bg-[#d97a2d] 
            transition duration-300 
            w-[150px] 
            mx-auto sm:mx-0  /* Center button on mobile, keep on the left on larger screens */
          "
        >
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default FrameSectionSecond;
