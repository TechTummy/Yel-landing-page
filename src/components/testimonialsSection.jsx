import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css'; // 👈 custom styling for white pagination
import { useState } from 'react';
import HomeLayout from '../layouts/HomeLayout';

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

const leaders = [
  {
    id: 1,
    name: "Yubin Chang",
    title: "President of Hope Global Outreach Foundation",
    img: "./assets/woman.png",
    details: [
      "30+ years as an educator and motivational speaker",
      "First-generation immigrant from South Central LA",
      "Built a successful career in education in Orange County",
      "Founder of Hope GOF, nurturing youth leadership and opportunity",
    ],
  },
  {
    id: 2,
    name: "Darius Farrelly",
    title: "Founder of YEL  CEO of Hope Global . Outreach Foundation",
    img: "./assets/man1.png",
    details: [
      "25+ years in the entertainment industry",
      "Launched careers of La La Anthony, MTV’s Sway Calloway, Les Brown",
      "Dedicated to youth empowerment and real-world skill-building",
      "Architect of YEL’s dynamic arts, sports, and performance programs",
    ],
  },
  {
    id: 3,
    name: "Joshua Sykes",
    title: "Creative Director of YEL",
    img: "./assets/man2.png",
    details: [
      "15+ years as a Creative Director and Experiential Designer",
      "Spearheaded major youth tech and design initiatives including the South LA Best Buy Teen Tech Center",
      "Dedicated to empowering youth through arts, technology, and immersive creative experiences",

    ],
  },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const toggleFaq = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
  return (
    <section className="bg-[#070322]  py-6 font-montserrat text-white overflow-hidden">
      <div className='flex flex-col justify-center items-center gap-6 mb-20'>
       <p className='font-bold text-[24px] bg-gradient-to-r from-[#ece7d2] via-[#f5c46d] text-center via-60% to-[#e94b3c] bg-clip-text text-transparent'>The Echo of YEL: From Participants to Leaders..</p>
      <p className='z-30 text-center text-white font-bold m-0 w-[60%]'>Many who first discovered YEL through a Rally or class now mentor others — 
proof that YEL’s influence doesn’t end when the event does.</p>
      <p className='z-30 text-center text-white font-bold m-0 w-[60%]'>Our alumni are walking testaments of impact — the once-quiet voices now leading, teaching, and amplifying others.”</p>
      </div>
      <div className="">
        <HomeLayout>
          <div className='flex flex-col justify-center items-center'>

          <img 
          src='./assets/leadership.png'
          alt='img'
          />
          <p className='font-bold text-[24px] bg-gradient-to-r from-[#ece7d2] via-[#f5c46d] text-center via-60% to-[#e94b3c] bg-clip-text text-transparent w-[60%]'>Youth Enrichment Leaders: Guiding the next generation with creativity, confidence, and real-world skills.</p>
          </div>
          <div className="mt-10 flex flex-col justify-center items-center bg-[url('/assets/yel_circle.png')] bg-cover bg-center bg-no-repeat">
        {leaders.map((leader) => (
          <div key={leader.id} className="flex gap-10 mb-10 last:mb-0 w-[80%]">
            <img src={leader.img} alt={leader.name} className="w-[150px]" />
            <div className="flex flex-col">
              <p className="font-bold text-[24px] bg-gradient-to-r from-[#ece7d2] via-[#f5c46d] via-60% to-[#e94b3c] bg-clip-text text-transparent">
                {leader.name}
              </p>
              <p className="font-bold">{leader.title}</p>
              <ul className="list-disc ml-5">
                {leader.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
        </HomeLayout>
      </div>
    </section>
  );
}
