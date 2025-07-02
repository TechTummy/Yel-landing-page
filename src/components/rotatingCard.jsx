import React, { useState, useEffect } from 'react';
import InfoCard from './infoCard';
import './rotatingCard.css';

// Swiper for mobile
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function RotatingCarousel() {
  const [deg, setDeg] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size change
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const rotate = (direction) => {
    setDeg((prev) => (direction === 'next' ? prev - 60 : prev + 60));
  };

  const cards = [
    {
      topLabel: 'Martial Arts',
      mainHeading: 'Taekwondo + Basketball',
      subHeading: 'Discipline, strength, perseverance and competition.',
      description: '',
      imageSrc: '/assets/teak.png',
    },
    {
      topLabel: '',
      mainHeading: 'Dance',
      subHeading: 'Confidence through movement and performance',
      description: '',
      imageSrc: '/assets/dance.png',
    },
    {
      topLabel: 'Design Lab',
      mainHeading: 'Graphic + Apparel Design',
      subHeading: 'Design. Wear it. Digital to Physical goods.',
      description: '',
      imageSrc: '/assets/graphics.png',
    },
    {
      topLabel: '',
      mainHeading: 'Music',
      subHeading: 'Production + Performance',
      description: '',
      imageSrc: '/assets/music.png',
    },
    {
      topLabel: '',
      mainHeading: 'Production',
      subHeading: 'Photography + Videography',
      description: 'Visual storytelling through camera composition and creativity.',
      imageSrc: '/assets/production.png',
    },
    {
      topLabel: 'Vocabulary Building',
      mainHeading: 'Life Skills',
      subHeading: 'Financial literacy + More',
      description: 'Discipline, strength, perseverance and competition.',
      imageSrc: '/assets/vq.png',
    },
  ];

  return (
    <>
     {isMobile ? (
  <div className="w-full px-4 flex justify-center items-center">
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {cards.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center items-center">
            <InfoCard
              topLabel={item.topLabel}
              mainHeading={item.mainHeading}
              subHeading={item.subHeading}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
) : (
        <div className="relative flex flex-col items-center justify-center py-10 font-sans text-white min-h-screen px-4 sm:px-0">
          <div className="relative w-full max-w-[320px] sm:max-w-[300px] h-[250px] sm:h-[220px] perspective">
            <div
              className="carousel w-full h-full absolute transform-style preserve-3d transition-transform duration-1000"
              style={{ transform: `rotateY(${deg}deg)` }}
            >
              {cards.map((item, i) => (
                <div
                  key={i}
                  className="absolute w-full h-full"
                  style={{ transform: `rotateY(${i * 60}deg) translateZ(350px)` }}
                >
                  <InfoCard
                    topLabel={item.topLabel}
                    mainHeading={item.mainHeading}
                    subHeading={item.subHeading}
                    description={item.description}
                    imageSrc={item.imageSrc}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Left Button */}
          <div className="absolute top-1/2 left-4 sm:left-6 transform -translate-y-1/2 z-10">
            <button
              onClick={() => rotate('prev')}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#191235] text-gray flex items-center justify-center shadow-md hover:bg-gray-200 hover:text-[#191235] transition-all"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Right Button */}
          <div className="absolute top-1/2 right-4 sm:right-6 transform -translate-y-1/2 z-10">
            <button
              onClick={() => rotate('next')}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#191235] text-gray flex items-center justify-center shadow-md hover:bg-gray-200 hover:text-[#191235] transition-all"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
