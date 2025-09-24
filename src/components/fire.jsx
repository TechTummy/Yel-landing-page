// components/fire.tsx or fire.jsx
import React from 'react';

export default function Fire() {
  return (
    <div className="relative h-[100px] w-full -mt-[100px] top-40 z-20">
      <img
        src="/assets/fire.png"
        alt="fire"
        className="absolute top-0 left-0 w-full object-cover pointer-events-none"
      />
    </div>
  );
}
