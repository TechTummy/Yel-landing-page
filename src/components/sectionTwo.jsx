import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import HeroSection from './heroSection';

function SectionTwo() {
  return (
    <>
      {/* Hero Section with overlay button */}
      <div className="relative">
        <HeroSection />

        {/* Positioned Button */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1/2 top-[370px] sm:top-[360px] transform -translate-x-1/2 z-20"
        >
          <img
            src="/assets/button.png"
            alt="Hero Logo"
            className="w-[50px] sm:w-[60px] hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </a>
      </div>

      {/* Section Content */}
      <div className="bg-[#070322] flex flex-col items-center justify-center relative overflow-hidden gap-5 px-4 pb-12">
        <img src="/assets/text.png" className="max-w-[700px] w-full mt-20" />

        {/* Highlighted Words */}
        <div className="font-semibold text-[24px] sm:text-[30px] font-montserrat p-5 flex flex-wrap gap-4 items-center justify-center text-white text-center">
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
          Post-COVID youth recovery & development with a focus on morale, motivation, and discipline.
        </p>

        {/* Mission and Stats */}
        <HomeLayout>
          <div className="bg-[#291A4B] p-6 rounded-lg flex flex-col md:flex-row font-montserrat gap-6 items-stretch mt-8 w-full">
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
                <p className="text-[13px] sm:text-[14px] font-semibold text-white mt-2 max-w-xs">
                  To inspire, empower and guide youth through interactive workshops.
                </p>
              </div>
            </div>

            {/* Divider (hidden on small screens) */}
            <div className="w-full md:w-[2px] h-[2px] md:h-auto bg-white self-stretch md:self-auto"></div>

            {/* Right Section */}
            <div className="flex flex-1 gap-4 items-center justify-center">
              <h1 className="bg-gradient-to-r from-white via-[#f5c46d] via-60% to-[#cf1d0d] bg-clip-text text-transparent text-[60px] sm:text-[100px] font-bold">
                37,000
              </h1>
              <div>
                <h2 className="text-white font-bold text-[16px] sm:text-[20px]">Youth Served</h2>
                <p className="text-white text-sm">• Year to Date</p>
              </div>
            </div>
          </div>
        </HomeLayout>
      </div>
    </>
  );
}

export default SectionTwo;
