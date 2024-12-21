import React from 'react';
import heroImage from '../assets/hero-image.jpg'; // Replace with your actual image path

const HeroSection = () => {
    return (
        <section
            className="relative w-full h-[700px] bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Overlay Text Container */}
            <div
                className="
                    absolute 
                    left-0 bottom-0 md:top-[354px] lg:top-[354px]
                    w-full md:w-[630px] lg:w-[622px] 
                    p-6 md:p-[24px_40px_32px_40px] 
                    bg-gradient-to-r from-[#1CBDDD] to-[#4DCA79]
                    text-white 
                    h-auto lg:h-[306px]
                    md:left-[80px] lg:left-[60px]
                "
            >
                {/* Heading */}
                <h1
                    className="
                        font-bold tracking-tight text-left
                        text-[36px] md:text-[48px] 
                        leading-[36px] md:leading-[48px] 
                        font-[Inter] 
                        letter-spacing-[-0.02em]
                        decoration-skip-ink-none
                        underline-position-from-font
                    "
                >
                    We crush your competitors, goals, and sales records - without the B.S.
                </h1>

                {/* Button */}
                <button
                    className="
                        mt-4 md:mt-6 px-6 py-3 bg-[#F28D35] 
                        text-white font-bold 
                        rounded-tl-[4px] rounded-br-[4px] 
                        hover:bg-[#d97a2d] transition duration-300
                    "
                >
                    Get free consultation
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
