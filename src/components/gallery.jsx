import React, { useState } from "react";
import HomeLayout from "../layouts/HomeLayout";

const galleryVideos = [
  "/assets/yel_vid3.mp4",
  "/assets/yel_vid5.mp4",
  "/assets/yel_vid6.mp4",
  "/assets/yel_vid7.mp4",
  "/assets/yel_vid8.mp4",
  "/assets/yel_vid9.mp4",
  "/assets/yel_vid10.mp4",
  "/assets/yel_vid11.mp4",
  "/assets/yel_vid12.mp4",
  "/assets/yel_vid13.mp4",
];

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-[#070322] pb-20">
      <HomeLayout>
        {/* Header */}
        <div className="flex flex-col justify-center items-center mb-10">
          <img src="/assets/action.png" className="w-[60%]" alt="YEL in Action" />
          <p className="text-[40px] font-semibold text-center bg-gradient-to-r from-[#ece7d2] via-[#f5c46d] via-60% to-[#e94b3c] bg-clip-text text-transparent">
            Photo &amp; Video Gallery
          </p>
        </div>

        {/* Masonry gallery — CSS multi-column packs varying-height videos
            tightly with no gaps. Each item fills its column width and is
            kept whole with break-inside-avoid. */}
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4">
          {galleryVideos.map((src, i) => (
            <video
              key={i}
              src={src}
              autoPlay
              muted
              loop
              playsInline
              onClick={() => setSelected(src)}
              className="mb-4 w-full h-auto rounded-lg object-cover break-inside-avoid cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            />
          ))}
        </div>
      </HomeLayout>

      {/* Fullscreen modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-4xl font-bold text-white transition-transform hover:scale-110"
            aria-label="Close"
          >
            ✕
          </button>
          <video
            src={selected}
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85%] max-w-[90%] rounded-lg object-contain shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
