import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
  '/assets/yel-header1.png',
  '/assets/yel-header2.png',
];

export default function HeroShapeCarousel() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background Swiper */}
      {/* <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="w-full h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper> */}
      <video
      src="/assets/yel_vid1.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-auto object-cover"
    ></video>
      {/* Button ABOVE the curve */}

      {/* Curve Shape */}
         {/* Fire rising from below */}
      <div className="absolute  left-1/2 transform -translate-x-1/2 w-full flex justify-center">
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-[url('/assets/fire.png')]  bg-cover overflow-hidden leading-[0] z-[1]">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-[130px] bg-[url('/assets/fire.png')] bg-cover bg-no-repeat"
        >
          <path
            d="M0,0 C150,200 350,200 500,0 L500,150 L0,150 Z"
            fill="#070322"
            className="bg-[url('/assets/fire.png')] bg-cover "
          />
        </svg>
      </div>
    </div>
  );
}
