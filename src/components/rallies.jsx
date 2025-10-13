import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import "./style.css"
export default function Rallies() {
  return (
    <div className='font-montserrat'>
        <div className='flex flex-col justify-center items-center inset-0 bg-gradient-to-b from-[#070322] via-[#070322] to-transparent'>
             <p className='font-semibold
              text-[24px] bg-gradient-to-r from-[#ece7d2] via-[#f5c46d] text-center via-60% to-[#e94b3c] bg-clip-text text-transparent mb-10'>Feel the Energy. Experience the Impact.</p>
            <img
            src="/assets/rallies.png" 
            alt="alumni"
            className="w-[70%] mb-10"
          />
        </div>
        <div className='bg-white flex flex-col justify-center items-center mx-20'>
            <p className='font-bold text-2xl bg-gradient-to-r from-[#000000] via-[#4B2E84] text-center via-60% to-[#F3732A] bg-clip-text text-transparent mb-4 w-[60%]'>Bringing the full YEL experience directly to schools, community centers, and partner organizations.</p>
            <img
            src="/assets/shadow.png" 
            alt="alumni"
            className="w-[50%]"
          />
          <p className='text-[#372569] font-bold text-sm text-center mb-6 w-[60%]'>YEL Rallies are one-day, high-energy events that pack all of YEL’s creative programs — design, music, dance, sports, and life skills — into one unforgettable experience.</p>
          <p className='text-[#372569] font-bold text-sm text-center mb-6 w-[60%]'>We bring our full team, tools, and mentorship model directly to schools, 
            youth centers, and partner organizations, transforming their space 
            into a rotating showcase of everything YEL offers</p>
          <p className='text-[#372569] font-bold text-sm text-center w-[60%]'>Students move through each activity, discovering creativity, 
            confidence, and community in real time</p>

      <div class="relative w-full my-8">

  <div class="w-full overflow-x-auto scrollbar-hide">
    <div class="flex gap-3 px-4 py-2 min-w-full">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <div
          key={i}
          class="h-[130px] w-[200px] flex-shrink-0 rounded-lg overflow-hidden snap-center"
        >
          <img
            src={`./assets/carou${i}.png`}
            alt={`Carousel ${i}`}
            class="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>

  <div class="flex justify-center items-center">
    <p class="font-bold font-montserrat mt-10 text-[18px] bg-gradient-to-r from-[#000000] via-[#4B2E84] w-full md:w-[60%] text-center via-60% to-[#F3732A] bg-clip-text text-transparent mb-4">
      It's the ultimate introduction to YEL, where inspiration becomes action. Instead of telling you what YEL does — we show you!
    </p>
  </div>

  <div class="flex flex-col md:flex-row gap-6 md:gap-20 justify-center items-center">
    <button class="flex items-center gap-2 bg-gradient-to-r from-[#4B2E84] via-[#000000] to-[#F3732A] px-6 md:px-10 py-2 rounded-3xl text-white font-bold">
      <img src="/assets/icon-happy.png" alt="icon" class="w-10 h-8 md:w-12 md:h-10" />
      <span>Host a Yel Rally</span>
    </button>
    <button class="flex items-center gap-2 bg-gradient-to-r from-[#4B2E84] via-[#000000] to-[#F3732A] px-6 md:px-10 py-2 rounded-3xl text-white font-bold">
      <img src="/assets/icone-call.png" alt="icon" class="w-10 h-8 md:w-12 md:h-10" />
      <span>Host a Yel Rally</span>
    </button>
  </div>

  <div class="flex justify-center mt-14">
    <img src="/assets/shadow.png" class="w-[80%] md:w-[50%]" />
  </div>
</div>
        </div>
    </div>
  )
}

