import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import { useState,useEffect } from 'react';
import SmallCard from './smallCard';
export default function MovementSection() {
      const [isMobile, setIsMobile] = useState(false);
  
    // Detect mobile screen
    useEffect(() => {
      const checkScreen = () => {
        setIsMobile(window.innerWidth < 768); // Tailwind's `md` breakpoint is 768px
      };
  
      checkScreen(); // Initial check
  
      window.addEventListener('resize', checkScreen); // Listen to resize
      return () => window.removeEventListener('resize', checkScreen); // Cleanup
    }, []);
  return (
    <div className="font-montserrat relative z-0">
        <div className=' inset-0 bg-gradient-to-b from-[#070322] via-[#070322cc]/80 to-transparent h-[300px] z-0 absolute'></div>
      <HomeLayout>
        {/* Top Centered Images */}
      <img
        src="/assets/move.png"
        alt="Movement Section"
        className="w-auto sm:w-[1000px] mx-auto relative z-10 mb-20 pt-10 "
        />

          {
        isMobile ? (
            <>
            <div className='flex flex-col gap-9 justify-center items-center'>
                <SmallCard title={"EXPAND"} text={<>Expand to <strong>more schools+ communities </strong></>} icon={"/assets/expand.png"} />
                <SmallCard title={"TRAIN"} text={<>Train future <strong>leaders through creativity</strong></>} icon={"/assets/expand.png"} />
                <SmallCard title={"SUPPORT"} text={<>Support youth <strong>healing after COVID</strong> disruption</>} icon={"/assets/expand.png"} />
            </div>
    
            </>
        ) : (
            
            <img
              src="/assets/movement.png"
              alt="Movement Section"
              className="w-[320px] sm:w-[600px] md:w-[1000px] mx-auto pt-6 md:pt-10"
            />
            
               
        )
        }

        {/* 3-column layout */}
        <div className="flex flex-col md:flex-row w-full mt-10 md:mt-14 gap-6 px-4 md:px-0">
          {/* Left Column */}
          <div className="flex-1 flex justify-center">
            <img
              src="/assets/sometime.png"
              alt="Movement Icon"
              className="w-[200px] sm:w-[250px] md:w-[100%] object-contain"
            />
          </div>

          {/* Center Column */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/assets/yel.png"
              alt="YEL Logo"
              className="w-[250px] sm:w-[400px] md:w-[1000px] object-contain"
            />
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="font-black text-[24px] sm:text-[28px] md:text-[30px] leading-tight mb-4">
              <span>YOUTH</span>
              <span className="text-[#F06C23] block">EDUTAINMENT</span>
              <span className="text-[#4F2977] block">LEAGUE</span>
            </h1>
            <img
              src="/assets/heard.png"
              alt="Movement Icon"
              className="w-[250px] sm:w-[400px] md:w-[500px]"
            />
          </div>
        </div>
      </HomeLayout>

      {/* Bottom Gradient */}
      <div className="inset-0 bg-gradient-to-t from-[#070322] via-[#070322cc]/20 to-transparent h-[60px] md:h-[100px]"></div>
    </div>
  );
}
