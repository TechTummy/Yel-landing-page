import React from 'react';
import HomeLayout from '../layouts/HomeLayout';

export default function AlumniSection() {
  return (
    <div className="relative bg-gradient-to-r from-[#1D1428] to-[#2B1A10] flex flex-col items-center justify-center z-0 overflow-hidden">
      
      {/* Top Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070322] via-[#070322cc] to-transparent h-[150px] sm:h-[300px] z-10 pointer-events-none"></div>

      <HomeLayout>
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
