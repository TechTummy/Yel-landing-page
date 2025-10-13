import React from 'react';
import HomeLayout from '../layouts/HomeLayout';

export default function AlumniSection() {
  return (
    <div className="relative bg-gradient-to-r from-[#070322] to-[#070322] flex flex-col items-center justify-center z-0 overflow-hidden">
      
      {/* Top Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070322] via-[#070322cc] to-transparent h-[150px] sm:h-[300px] z-10 pointer-events-none"></div>

      <HomeLayout>
        <div className='z-30 flex flex-col justify-center items-center mb-10'>
          <img
            src="/assets/alumni2.png" 
            alt="alumni"
            className="z-20 w-[70%]"
          />
          <p className='z-30 text-center text-white font-bold m-0 w-[60%]'>Our alumni,  mentors & industry partners have gone on to excel in TV, 
film, music, sports, and business — carrying the YEL spirit wherever they go.</p>
        </div>
        {/* Alumni Image */}
        <img
          src="/assets/alumni.png"
          alt="alumni"
          className="w-full max-w-[1200px] object-contain relative z-0 px-4 sm:px-6 md:px-0"
        />
      </HomeLayout>

      {/* Bottom Divider/Section */}
      {/* <div className="w-full h-[150px] sm:h-[200px] md:h-[300px] bg-[#070322] mt-10 relative z-10"></div> */}
    </div>
  );
}
