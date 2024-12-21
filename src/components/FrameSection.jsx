import React from 'react';
import frameImage from '../assets/frame-image.jpg'; 

const FrameSection = () => {
  return (
    <section
      className="
        relative 
        w-full 
        max-w-[1064px] 
        mx-auto 
        mt-14 
        flex flex-col 
        sm:flex-row 
        sm:items-center 
        gap-10 
        sm:gap-28 
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
          mb-6 
          sm:mb-0 
          flex 
          justify-center
        "
      >
        <img
          src={frameImage}
          alt="Frame"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div
        className="
          w-full 
          sm:w-[542px] 
          h-auto 
          flex 
          flex-col 
          justify-start 
          px-4 
          text-center 
          sm:text-left
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
            text-center sm:text-left
          "
        >
          Web & Mobile App Development
        </h2>

        {/* Description */}
        <p
          className="
            text-base 
            leading-6 
            text-gray-800 
            mb-6
          "
        >
          Your web and mobile apps are pieces of the puzzle to grow your business. 
          We use frameworks tailored to content and engagement methods, responding 
          to different intents shown by potential customers interacting with your 
          business online.
        </p>

        {/* Button */}
        <button
          className="
            mt-3 
            px-4 py-2 
            bg-orangeCustom 
            text-white 
            font-bold 
            rounded-md 
            hover:bg-orangeCustomHover 
            transition duration-300 
            w-[150px] 
            mx-auto sm:mx-0
          "
        >
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default FrameSection;
