import React from 'react';
import HeroShape from './heroShape';
import HeroShapeCarousel from './heroShape';

export default function HeroSection() {
  return (
    <div className="relative w-full bg-[#070322]" >
      {/* Hero Background */}
      <div className="w-full relative ">
        {/* Content above fire */}
        <HeroShapeCarousel />

      </div>

      {/* Fire rising from below */}
      <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-full flex justify-center">
        
      </div>
    </div>
  );
}
