import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css'; // 👈 custom styling for white pagination
import { useState } from 'react';

const testimonials = [
  {
    title: "That was incredible !",
    content:
      "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable.",
    author: "Byeon Wo Soek",
  },
  {
    title: "That was incredible !",
    content:
      "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable.",
    author: "Byeon Wo Soek",
  },
  {
    title: "That was incredible !",
    content:
      "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable.",
    author: "Byeon Wo Soek",
  },
  {
    title: "That was incredible !",
    content:
      "Exceptional service and stunning designs! The entire process was smooth and collaborative. The team took the time to understand our needs and provided insightful suggestions that truly enhanced our project. The project was delivered on time, and the quality was impeccable.",
    author: "Byeon Wo Soek",
  },
];

const faqs = [
  {
    question: "What Services Does Your Agency Offer?",
    answer:
      "Our agency provides a range of services to meet your business needs, including custom software solutions, graphic design, web development, and digital marketing. We specialize in creating high-quality, user-friendly, and visually appealing products that enhance efficiency and drive growth.",
  },
  {
    question: "How Do You Ensure The Quality Of Your Work?",
    answer:
      "We follow a structured quality assurance process, involving testing, client feedback, and best coding practices to ensure high-quality results.",
  },
  {
    question: "How Do You Handle Project Revisions Or Changes?",
    answer:
      "We offer multiple revision rounds based on project scope. Our team works closely with clients to integrate changes quickly and efficiently.",
  },
  {
    question: "What If I'm Not Satisfied With The Final Result?",
    answer:
      "Client satisfaction is our priority. We offer refinements to ensure your vision is realized while staying within project boundaries.",
  },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const toggleFaq = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
  return (
    <section className="bg-[#070322] bg-[url('/assets/yel_circle.png')] bg-cover bg-center bg-no-repeat py-6 font-montserrat text-white overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold">Don’t Trust Us, Trust</h2>
        <p className="text-3xl bg-gradient-to-b from-white via-gray-400 via-60% to-gray-500 bg-clip-text text-transparent font-semibold pt-3">Their Voice</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 1000 }}
          pagination={{ clickable: true }}
          className="testimonial-swiper"
     
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx} className="!w-[320px] sm:!w-[400px] md:!w-[420px]">

              <div className="rounded-[20px] h-[100%] p-4 bg-gradient-to-br from-[#1c0b3e]/20 to-[#221140]/90 backdrop-blur-[10px] border border-white/20 hover:border-white/30  transition duration-300">
                <h3 className="text-xl md:text-2xl font-semibold text-center mb-4">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 text-center mb-4 ">
                  {item.content}
                </p>
                <div className="border-t border-white/20 mb-2 mx-auto w-[60%]"></div>
                <p className="text-center font-semibold text-lg">{item.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-col items-center justify-center mt-20 gap-4 ">
          <h2 className="text-3xl md:text-4xl font-semibold w-[300px] text-center">Proven Track Record</h2>
        <button className="px-6 py-2 text-white text-xs font-medium rounded-full bg-gradient-to-br from-[#0C011A] via-[#4C1E9F] to-[#E54D1E] shadow-md hover:opacity-90 transition duration-300">
        Join Us
        </button>
        </div>
        
      </div>

    </section>
  );
}
