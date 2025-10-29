import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import HeroSection from './heroSection';

function SectionTwo() {
  return (
    <>
      {/* Hero Section with overlay button */}
      <div className="relative" id='home' >
        <HeroSection />
        {/* Positioned Button */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1/2 top-[370px] sm:top-[360px] transform -translate-x-1/2 z-20"
        >
          {/* <img
            src="/assets/button.png"
            alt="Hero Logo"
            className="w-[50px] sm:w-[60px] hover:scale-110 transition-transform duration-300 ease-in-out"
          /> */}
        </a>
      </div>

      {/* Section Content */}
      <div className="bg-[#070322] flex flex-col items-center justify-center relative overflow-hidden gap-5 px-4 pb-12">
          <img
            src="/assets/Rectangle12.png"
            alt="Hero Logo"
            className="mt-5"
          />
        <div className='flex gap-8 mt-5'>
            <img
            src="/assets/left.png"
            alt="Hero Logo"
            className="w-[300px]"
          />
              <img
            src="/assets/button.png"
            alt="Hero Logo"
            className="w-[60px] sm:w-[60px] hover:scale-110 transition-transform duration-300 ease-in-out"
          />
            <img
            src="/assets/right.png"
            alt="Hero Logo"
            className="w-[300px]"
          />
        </div>
        <img src="/assets/text.png" className="max-w-[700px] w-full mt-20" />

        {/* Highlighted Words */}
        <div className="font-semibold text-[24px] sm:text-[30px] font-montserrat p-5 flex flex-wrap gap-16 items-center justify-center text-white text-center">
          {['Entertainment', 'Education', 'Sports'].map((word, idx) => (
            <h1
              key={idx}
              className="bg-gradient-to-r from-white via-[#f5c46d] via-60% to-[#e94b3c] bg-clip-text text-transparent"
            >
              {word}
            </h1>
          ))}
        </div>

        {/* Description */}
        <p className="text-center text-white bg-gradient-to-r from-[#FFFFFF] to-[#5C5781] bg-clip-text text-transparent font-montserrat max-w-xl text-sm sm:text-base">
          At YEL, we believe every young person holds creative power.
        </p>
        <p className="text-center text-white bg-gradient-to-r from-[#FFFFFF] to-[#5C5781] bg-clip-text text-transparent font-montserrat max-w-xl text-sm sm:text-base">
          We exist to inspire, empower, and guide youth through hands-on,
          interactive programs that blend education and entertainment — 
          helping them turn curiosity into confidence, and passion into purpose.
        </p>

        {/* Mission and Stats */}
        <HomeLayout>
          <div className="bg-gradient-to-r  from-[#1D0B47] via-[#2A1A4C] to-[#1D0C48] p-6 rounded-lg flex flex-col md:flex-row font-montserrat gap-6 items-stretch mt-8 w-full">
            {/* Left Section */}
            <div className="flex flex-1 gap-4 items-center justify-center">
              <img
                src="/assets/logo-2.png"
                className="w-[100px] sm:w-[150px] h-full object-contain"
                alt="Logo 2"
              />
              <div>
                <h1 className="bg-gradient-to-r from-white via-[#f5c46d] via-60% to-[#cf1d0d] bg-clip-text text-transparent text-[20px] sm:text-[24px] font-semibold">
                  YEL'S MISSION
                </h1>
                <p className="text-[13px] sm:text-[14px] font-normal text-sm text-white mt-2 max-w-xs">
                  To inspire, empower
                  and guide 
                  youth
                  through interactive, hands-on
                  workshops that unlock confidence, creativity, and discipline
                </p>
              </div>
            </div>

            {/* Divider (hidden on small screens) */}
            <div className="w-full md:w-[2px] h-[2px] md:h-auto bg-white self-stretch md:self-auto"></div>

            {/* Right Section */}
            <div className="flex flex-1 gap-4 items-center justify-center">
              <h1 className="bg-gradient-to-r from-white via-[#f5c46d] via-60% to-[#cf1d0d] bg-clip-text text-transparent text-[60px] sm:text-[70px] font-semibold">
                41,258+
              </h1>
              <div>
                <h2 className="text-white font-bold text-[16px] ">Lives Touched</h2>
                <p className="text-white text-sm">and counting</p>
              </div>
            </div>
          </div>
        </HomeLayout>
      </div>
    </>
  );
}

export default SectionTwo;
