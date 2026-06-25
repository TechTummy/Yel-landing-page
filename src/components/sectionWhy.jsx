import React from 'react'
import HomeLayout from '../layouts/HomeLayout'

export default function SectionWhy() {
  return (
    <>
    <div className=' bg-white font-montserrat' >
        <div className='flex flex-col items-center relative overflow-hidden'>
          <div className='pt-20 text-center text-white inset-0 bg-gradient-to-b from-[#070322] via-[#070322cc] to-transparent w-[100%] flex flex-col justify-center items-center'>
              <p className='text-[50px] text-semibold bg-gradient-to-r from-[#ece7d2] via-[#f5c46d] text-center via-60% to-[#e94b3c] bg-clip-text text-transparent'>Why Yel Works</p>
              <img src="/assets/power.png" alt="Why Choose Us" className='w-[600px] mb-5' />
          </div>
          <HomeLayout>
          <div className=' text-center text-white'>
            <p className='text-[18px] font-semibold text-[#372569]'>YEL redefines learning by merging education with entertainment — 
            what we call “Edutainment.”</p>
            <p className='text-[18px] font-semibold text-[#372569]'>It’s how we keep youth engaged, active, and inspired.</p>
            <p className='text-[25px] font-bold text-[#070322] mt-4'>Every YEL experience is built around</p>
            <p className='text-[25px] font-bold text-[#4C0385]'>four pillars:</p>
          </div>
          <div id='camp-showbiz' className='flex flex-col justify-center items-center'>
            <img src="/assets/ben.png" alt="Why Choose Us" className='w-[1000px] mb-[10px]'/>
            <p className='text-[18px] font-bold text-[#372569] text-center'>This approach ensures every student not only learns, they live what they learn</p>
            <img src="/assets/shadow.png" alt="Why Choose Us" className='mt-[10px] w-[400px]'/>
            <p className='text-[18px] font-bold text-[#372569] text-center w-[60%]'>In the post-COVID era, YEL continues to stand as a source of recovery and renewal — restoring morale, motivation, and purpose for youth seeking direction and opportunity.</p>
            <p className='text-[18px] font-semibold text-center text-[#372569] mt-6 '>
              YEL stands for more than fun.
              It’s a foundation for growth, leadership, and lifelong success.</p>
            <img src="/assets/shadow.png" alt="Why Choose Us" className='mt-[20px] w-[400px]'/>
              <p className='text-[25px] font-bold text-[#070322] mt-4 text-center'>As the Official Enrichment Partner of HartBeat Studios, YEL Puts On</p>
            <img src="/assets/showbiz.png" alt="Why Choose Us" className='mt-[20px] w-[60%]'/>
              <p className='text-[25px] font-bold  bg-gradient-to-r from-[#070322] via-[#f5c46d]via-60% to-[#4C0385] bg-clip-text text-transparent mt-4 text-center'>The D✪PEST Entertainment Camp In San Fernando Valley</p>
            <img src="/assets/kids.png" alt="Why Choose Us" className='mt-[20px] w-[70%]'/>
            
          </div>
          <div className="flex flex-col md:flex-row w-full items-center justify-center gap-6 md:gap-8 mt-8 px-4 md:px-0">
            {/* Left: YEL All Star Camp */}
            <div className="flex-1 flex justify-center">
              <img
                src="/assets/all-star-camp.png"
                alt="YEL All Star Camp"
                className="w-[200px] sm:w-[250px] md:w-[85%] object-contain"
              />
            </div>
            {/* Center: current onsite video */}
            <div className="flex-[1.4] flex justify-center">
              <video
                src="/assets/yel_vid2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
              ></video>
            </div>
            {/* Right: Summer Time Fun */}
            <div className="flex-1 flex justify-center">
              <img
                src="/assets/summer-fun.png"
                alt="Summer Time Fun"
                className="w-[200px] sm:w-[250px] md:w-[85%] object-contain"
              />
            </div>
          </div>
            <p className='text-[18px] font-bold  bg-gradient-to-r from-[#070322] via-[#f5c46d]via-60% to-[#4C0385] bg-clip-text text-transparent mt-8 text-center'>Camp Showbiz is held every Summer in partnership with:</p>
           <div className="flex flex-col md:flex-row w-full mt-10 md:mt-14 gap-6 px-4 md:px-0">
                      {/* Center Column */}
                      <div className="flex-1 flex justify-center items-center">
                        <div className='flex flex-col justify-center items-center'>
                              <img
                                src="/assets/heartbeat.jpg"
                                alt="Movement Icon"
                                className="w-[250px] sm:w-[350px]"
                              />
                          <p className='font-semibold text-[#06071D] text-xl'>STUDIOS</p>
                          <p className='text-[20px] font-extrabold  bg-gradient-to-r from-[#070322] via-[#f5c46d]via-60% to-[#4C0385] bg-clip-text text-transparent mt-8 text-center'>Open to ages 10–20*</p>
                        </div>
                      </div>
            </div>
          

          <div className="flex flex-col md:flex-row w-full mt-10 md:mt-14 gap-6 px-4 md:px-0">
            
          <img
            src="/assets/yel-to-be-heard.png"
            alt="Sometimes you have to YEL to be heard!"
            className="w-full object-contain"
          />
        </div>
          </HomeLayout>
        </div>
    </div>
        <div className='pt-20 text-center text-white inset-0 bg-gradient-to-t from-[#070322] via-[#070322] to-transparent w-[100%] flex flex-col justify-center items-center h-[200px]'>
              
          </div>
    </>
  )
}
