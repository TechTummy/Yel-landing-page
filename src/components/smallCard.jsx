import React from 'react';
import { PiStarFourFill } from "react-icons/pi";

export default function SmallCard({ title, text, icon }) {
  return (
    <div className="relative w-[300px] h-[160px] bg-[url('/assets/back-small.png')] bg-center bg-cover rounded-xl shadow-lg p-4 flex flex-col items-center justify-end">
      {/* Icon */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white w-[70px] h-[70px] rounded-full flex items-center justify-center shadow-md">
        <img src={icon} alt="icon" />
      </div>

      {/* Decorative stars */}
      <div className="flex justify-between w-full px-4 text-white text-sm mb-2">
        <span><PiStarFourFill /></span>
        <span><PiStarFourFill /></span>
      </div>

      {/* Title */}
      <h2 className="text-white text-lg font-semibold text-center mb-1">{title}</h2>

      {/* Description (JSX enabled) */}
      <div className="text-white text-sm text-center leading-snug">
        {text}
      </div>
    </div>
  );
}
