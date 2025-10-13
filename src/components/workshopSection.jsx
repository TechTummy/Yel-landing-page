import React from 'react';
import RotatingCard from './rotatingCard.jsx';

export default function WorkshopSection() {
  return (
    <div className="bg-[#070322] bg-[url('/assets/bg-2.png')] bg-no-repeat bg-cover  px-4 sm:px-6 md:px-0 py-20 md:py-20 h-full ">
      <div className='flex flex-col gap-3 justify-center items-center'>
        <img 
        src="/assets/logo-3.png"
          className="w-[100px] sm:w-[150px] h-full object-contain"
          alt="Logo 2"
        />
        <h1 className="text-[32px] mb-10 md:mb-0 sm:text-[40px] md:text-[50px] leading-tight text-center font-montserrat bg-gradient-to-r from-white via-[#f5c46d] via-60% to-[#e94b3c] bg-clip-text text-transparent">
          Core Programs
        </h1>
      </div>
      <RotatingCard />
    </div>
  );
}
