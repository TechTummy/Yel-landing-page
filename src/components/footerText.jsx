import React, { useState } from 'react';
import { IoIosAdd, IoIosClose } from 'react-icons/io';


export default function FinalText() {

  return (
    <div className="bg-[#070322] text-white py-16 px-6 font-montserrat">
      <div className="max-w-4xl mx-auto w-[80%]">
        <h2 className="text-center text-2xl font-semibold mb-2 text-[24px] bg-gradient-to-r from-[#ece7d2] via-[#f5c46d] text-center via-60% to-[#e94b3c] bg-clip-text text-transparent">Hope Global Outreach Foundation</h2>
        <p className='text-center font-semibold'>Empowering Communities, Transforming Lives</p>
        <p className='text-center text-sm mt-4 '>Hope Global Outreach is dedicated to improving the lives of individuals 
and communities through education, health, and empowerment initiatives. </p>
        <p className='text-center text-sm mt-4'>Join us in making a difference and creating a brighter future for all.</p>
      </div>
    </div>
  );
}
