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
    <div className="relative w-full  overflow-hidden">
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
      <div className="relative">
        <video
          src="/assets/yel_vid1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="block w-full h-auto object-cover"
        ></video>
        {/* Fade the bottom of the video into the page color across the full
            width so the bowl connects to it end-to-end (no hard seam). */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-b from-transparent to-[#070322]" />
      </div>

      {/* Hero "bowl" bottom — clean curved shape with the real glow lifted from
          the Group 138 design (baked into the SVG so it flows past the belly and
          fans out to the sides). Sits under the video in normal flow. */}
      <img
        src="/assets/hero-bowl.svg"
        alt=""
        aria-hidden="true"
        className="relative z-10 block w-full select-none pointer-events-none"
      />
    </div>
  );
}
