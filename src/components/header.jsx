import React from 'react';
import Layout from '../layouts/HomeLayout';
import { IoChevronForward } from 'react-icons/io5';
import RegisterModal from './RegisterModal';

function Header() {
  return (
    <div className="relative h-auto bg-[url('/assets/stars.png')]">
      {/* Background image layer */}
      <div className="absolute inset-0 bg-[url('/assets/ray.png')] bg-cover bg-center z-0"></div>

      {/* Foreground content */}
      <div className="relative z-10">
        {/* Top Banner */}
        <div className="h-[48px] bg-gradient-to-r from-[#30077c] via-[#070322] to-[#14095c] flex items-center">
          {/* <img src="/assets/ray.png" alt="Line" className="w-full absolute" /> */}
          {/* <img
            src="/assets/stars.png"
            alt="Line"
            className="w-full object-cover absolute h-[48px]"
          /> */}
          <Layout>
            <p className="font-montserrat font-light text-white text-[12px] sm:text-[14px] flex items-center gap-2 z-10">
              <p className='text-left'>Begin an Application to Host a YEL Camp · Volunteer · Become an Instructor</p>
              <span className="font-bold">Learn more</span>
              <IoChevronForward />
            </p>
          </Layout>
        </div>

        {/* Nav Section */}
        <div className="bg-[#070322] py-3">
          {/* <img
            src="/assets/ray.png"
            alt="Line"
            className="w-full absolute object-cover h-[64px]"
          />
          <img
            src="/assets/stars.png"
            alt="Line"
            className="w-full object-cover absolute h-[64px]"
          /> */}
          <Layout>
            <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-y-0 md:gap-6 font-montserrat z-10 relative">
              {/* Logo */}
              <a href="/" className="flex items-center justify-center z-10">
                <img
                  src="/assets/hope.png"
                  alt="Logo"
                  className="w-[150px] sm:w-[180px] h-auto mr-6"
                />
                <img
                  src="/assets/logo.png"
                  alt="Logo"
                  className="w-[150px] sm:w-[180px] h-auto"
                />
              </a>

              {/* Nav Menu */}
              <div className="flex flex-wrap justify-center gap-4 text-white text-sm bg-gradient-to-b from-[#000000] via-[#351A45] to-[#a33307] rounded-3xl px-4 py-2 z-10">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'Programs', id: 'programs' },
                  { name: 'Camp Showbiz', id: 'camp-showbiz' },
                  { name: 'YEL Rallies', id: 'yel-rallies' },
                  { name: 'Impact', id: 'impact' },
                ].map((item, i) => (
                  <a key={i} href={`#${item.id}`} className="hover:underline">
                    <span className="whitespace-nowrap">{item.name}</span>
                  </a>
                ))}
              </div>

              {/* CTA Button — opens the registration intake form */}
              <RegisterModal />
            </div>
          </Layout>
        </div>
      </div>
    </div>
  );
}

export default Header;
