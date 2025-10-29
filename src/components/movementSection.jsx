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
        {/* <div className=' inset-0 bg-gradient-to-b from-[#070322] via-[#070322cc]/80 to-transparent h-[200px] z-0 absolute'></div> */}
      <HomeLayout>
        {/* Top Centered Images */}
      <img
        src="/assets/movement2.png"
        alt="Movement Section"
        className="w-auto sm:w-[1000px] mx-auto relative z-10 mb-10 pt-10 "
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
        <div>
        </div>
             <div id='impact' className="flex flex-1 flex-col gap-4 items-center justify-center">
        <p className='text-center  font-bold w-[60%]'>YEL has served thousands of youth across Los Angeles, engaging them 
in programs that spark creativity and connect them to real-world opportunity.</p>
              <h1 className="bg-gradient-to-r from-[#070322] via-60% to-[#cf1d0d] bg-clip-text text-transparent text-[60px] sm:text-[70px] font-semibold">
                41,258+
              </h1>
               <p className='font-bold text-2xl bg-gradient-to-r from-[#000000] via-[#4B2E84] text-center via-60% to-[#F3732A] bg-clip-text text-transparent mb-4'>Youth & Community Members Reached.</p>
               <img src="/assets/stats.png"  />
                 <img
            src="/assets/shadow.png" 
            alt="alumni"
            className="w-[50%] mt-9"
          />
          <p className='font-bold text-2xl bg-gradient-to-r from-[#000000] via-[#4B2E84] text-center via-60% to-[#F3732A] bg-clip-text text-transparent mb-4 w-[70%]'>YEL doesn’t just build skills.It builds voices, leaders, and movements.</p>
          <p className='font-semibold text-[#070322] mb-4 w-[70%] text-center'>Every young person who steps into YEL discovers the power of their own voice,  and the courage to use it. Each idea shared, each performance, each creation becomes a shout of possibility that echoes far beyond the room.</p>
          <p className='font-semibold text-[#070322] mb-4 w-[70%] text-center'>
Those echoes reach families, classrooms, and communities, amplifying creativity, confidence, and hope</p>
          <p className='font-semibold text-[#070322] mb-4 w-[70%] text-center'>
At YEL, we don’t just help youth speak up — we help them stand out, stand tall, and be heard</p>
 <img
            src="/assets/shadow.png" 
            alt="alumni"
            className="w-[50%] mt-9"
          />
            </div>
      </HomeLayout>

      {/* Bottom Gradient */}
      <div className="inset-0 bg-gradient-to-t from-[#070322] via-[#070322cc]/20 to-transparent h-[60px] md:h-[100px]"></div>
    </div>
  );
}
