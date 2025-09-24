import React from 'react'
import HomeLayout from '../layouts/HomeLayout'

export default function SectionWhy() {
  return (
    <>
    <div className=' bg-gradient-to-b from-[#070322] via-white to-white '>
      <HomeLayout>
        <div className='flex flex-col items-center relative overflow-hidden'>
          <div className='pt-20 text-center text-white'>
              <img src="/assets/logo-3.png" alt="Why Choose Us" className='w-[200px] mx-auto ' />
          </div>
          <div className='pt-20 text-center text-white'>
              <img src="/assets/why.png" alt="Why Choose Us" className='w-[500px] mb-5' />
          </div>
          <img src="/assets/ben.png" alt="Why Choose Us" className='w-[1000px] mb-[100px]'/>
        </div>
      </HomeLayout>
    </div>
    </>
  )
}
