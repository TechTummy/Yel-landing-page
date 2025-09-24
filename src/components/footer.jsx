import React from 'react';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#070322] text-white py-12 px-6 md:px-16 relative overflow-hidden font-montserrat">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-purple-400 flex gap-2"><img src='/assets/star.png' /> YEL</span>
          </div>
          <p className="text-sm text-gray-300">
            We help see the full types of potential for your start-up business.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-[#FFFFFF] mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Career Tips</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        {/* Join the YEL Community */}
        <div className="space-y-4">
          <h3 className="bg-gradient-to-b from-white via-gray-400 via-60% to-gray-500 bg-clip-text text-transparent font-semibold text-xl flex flex-col">
            Join the YEL<span className="text-white"> Community</span>
          </h3>
          <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#392265] to-[#1e0f3b] px-2 py-1">
            <input
              type="email"
              placeholder="Enter Your Gmail"
              className="bg-transparent text-sm text-white px-4 py-2 outline-none w-full placeholder:text-gray-400"
            />
            <button className="bg-gradient-to-r from-[#392265] to-[#1e0f3b] text-white text-[13px] px-2 py-2 rounded-full border border-white hover:opacity-80 transition-all w-[100px]">
              Join Us
            </button>
          </div>
          <div className="flex gap-4 text-white text-lg mt-4">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>
      </div>

      {/* Decorative corners (optional based on your design) */}
{/* Left angle triangle - inverted */}
<div className="absolute bottom-0 left-0 w-0 h-0 border-b-[60px] border-r-[150px] border-b-[#431c6ed7] border-r-transparent"></div>

{/* Right angle triangle - inverted */}
<div className="absolute bottom-0 right-0 w-0 h-0 border-b-[60px] border-l-[150px] border-b-[#431c6ed7] border-l-transparent"></div>



    </footer>
  );
}
