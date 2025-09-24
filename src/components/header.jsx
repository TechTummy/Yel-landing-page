import React from 'react';
import Layout from '../layouts/HomeLayout';
import { IoChevronForward } from 'react-icons/io5';

function Header() {
  return (
    <div className="relative h-auto bg-[url('/assets/stars.png')]">
      {/* Background image layer */}
      <div className="absolute inset-0 bg-[url('/assets/ray.png')] bg-cover bg-center z-0"></div>

      {/* Foreground content */}
      <div className="relative z-10">
        {/* Top Banner */}
        <div className="h-[48px] bg-gradient-to-r from-[#28165B] via-[#070322]/60 to-[#28165B]/40 flex items-center">
          <img src="/assets/ray.png" alt="Line" className="w-full absolute" />
          <img
            src="/assets/stars.png"
            alt="Line"
            className="w-full object-cover absolute h-[48px]"
          />
          <Layout>
            <p className="font-montserrat font-light text-white text-[12px] sm:text-[14px] flex items-center gap-2 z-10 text-center justify-center">
              Begin an Application to Host a YEL Camp · Volunteer · Become an Instructor
              <span className="font-bold">Learn more</span>
              <IoChevronForward />
            </p>
          </Layout>
        </div>

        {/* Nav Section */}
        <div className="bg-[#1C1935] py-3">
          <img
            src="/assets/ray.png"
            alt="Line"
            className="w-full absolute object-cover h-[64px]"
          />
          <img
            src="/assets/stars.png"
            alt="Line"
            className="w-full object-cover absolute h-[64px]"
          />
          <Layout>
            <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-y-0 font-montserrat z-10 relative">
              {/* Logo */}
              <a href="/" className="flex items-center justify-center z-10">
                <img
                  src="/assets/logo.png"
                  alt="Logo"
                  className="w-[120px] sm:w-[150px] h-auto"
                />
              </a>

              {/* Nav Menu */}
              <div className="flex flex-wrap justify-center gap-4 text-white text-sm bg-gradient-to-br from-[#000000] via-[#351A45] to-[#D5521E] rounded-3xl px-4 py-2 z-10">
                {['Home', 'Programs', 'Camp Showbiz', 'Contact', 'Reviews'].map((item, i) => (
                  <a key={i} href="#">
                    <span className="whitespace-nowrap">{item}</span>
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <button className="bg-gradient-to-b from-[#ff7700] to-[#ff9f00] text-white font-bold text-sm px-4 py-2 rounded-3xl flex items-center z-10">
                <img src="/assets/icon.png" alt="icon" className="w-4 h-4 mr-2" />
                Register Today!
              </button>
            </div>
          </Layout>
        </div>
      </div>
    </div>
  );
}

export default Header;
