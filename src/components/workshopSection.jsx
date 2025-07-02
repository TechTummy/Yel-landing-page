import React from 'react';
import RotatingCard from './rotatingCard.jsx';

export default function WorkshopSection() {
  return (
    <div className="bg-[#070322] bg-[url('/assets/bg-2.png')] bg-no-repeat bg-cover px-4 sm:px-6 md:px-10 py-10 md:py-20">
      <h1 className="text-[32px] sm:text-[40px] md:text-[50px] leading-tight text-center font-montserrat bg-gradient-to-r from-white via-[#f5c46d] via-60% to-[#e94b3c] bg-clip-text text-transparent">
        Core Workshop Areas
      </h1>

      <div className="relative mt-10 sm:mt-14 md:mt-20 min-h-[100px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
        <RotatingCard />
      </div>
    </div>
  );
}
