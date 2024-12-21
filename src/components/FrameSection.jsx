import React from 'react';
import frameImage from '../assets/frame-image.jpg'; // Replace with your actual image path

const FrameSection = () => {
  return (
    <section
      className="
        relative 
        w-full 
        max-w-[1064px] 
        mx-auto 
        mt-[60px] 
        flex flex-col 
        sm:flex-row 
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
          src={frameImage}
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
          Web & Mobile App Development
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
          Your web and mobile Apps are pieces of the puzzle to grow your business. 
          We use frameworks which tailor content and engagement methods to respond 
          to different intents shown by your potential customers who interact with 
          your business online.
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

export default FrameSection;
