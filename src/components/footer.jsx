import React from 'react';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#070322] text-white py-12 px-6 md:px-16 relative overflow-hidden font-montserrat">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Logo & description */}
        <div className="space-y-4">
          <img src='/assets/hope-footer.png' alt='Barbara Allen Legacy Foundation' className='w-[40%]' />
          <div className="text-xs text-gray-300 space-y-1">
            <p>Phone: <a href="tel:+13233057255" className="hover:text-white">323-305-7255</a></p>
            <p>Fax: 323-389-1527</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold flex gap-2"><img src='/assets/star.png' /> YEL</span>
          </div>
          <p className="text-xs text-gray-300">
           Youth Edutainment League 2025
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-sm text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-xs text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Company */}
        {/* <div>
          <h3 className="font-semibold text-[#FFFFFF] mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Career Tips</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div> */}

        {/* Join the YEL Community */}
        <div className="space-y-4">
          <h3 className="font-semibold text-xl flex flex-col">
            Come YEL<span className="text-white"> wITH us !</span>
          </h3>
          <div className="flex items-center gap-2 rounded-full border border-[#a686e0] ">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent text-sm text-white px-4 py-2 outline-none w-full placeholder:text-gray-400"
            />
            <button className="bg-gradient-to-r from-[#1B1239] via-[#321E62] text-white text-[13px] px-2 py-2 rounded-full border  border-[#a686e0] hover:opacity-80 transition-all w-[200px]">
              Ways to YEL!
            </button>
          </div>
          <div className="flex gap-4 text-white text-lg mt-4">
            <a href="#"><FaInstagram /></a>
            {/* <a href="#"><FaLinkedinIn /></a> */}
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>
      </div>

      {/* Decorative corners (optional based on your design) */}
{/* Left angle triangle - inverted */}
<div className="absolute bottom-0 left-0 w-0 h-0 border-b-[60px] border-r-[150px] border-b-[#974be9c2] border-r-transparent"></div>

{/* Right angle triangle - inverted */}
<div className="absolute bottom-0 right-0 w-0 h-0 border-b-[60px] border-l-[150px] border-b-[#8028dfd7] border-l-transparent"></div>



    </footer>
  );
}
