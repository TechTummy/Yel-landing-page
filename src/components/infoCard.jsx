import React, { useState } from 'react';

// Modal Component
function Modal({ isOpen, onClose, cardData }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-montserrat">
      {/* Black opacity backdrop that covers entire screen */}
      <div className="absolute inset-0 bg-black bg-opacity-10" onClick={onClose}></div>
      
      <div className="relative bg-gradient-to-r from-[#17152C] via-[#281D4D] via-60% to-[#17152C] rounded-lg w-[400px] max-w-[90%] mx-4 text-white overflow-hidden z-10">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white z-10" 
          aria-label="Close"
        >
          ✕
        </button>

        <div className="p-6">
          <h2 className="text-2xl bg-gradient-to-r from-white via-[#f5c46d] text-center via-60% to-[#e94b3c] bg-clip-text text-transparent font-bold">
            {cardData.mainHeading}
          </h2>
          
          {cardData.subHeading && (
            <p className="text-sm font-medium text-white mt-1 text-center">
              {cardData.subHeading}
            </p>
          )}
          
          <p className="mt-4 text-sm text-[16px] font-semibold text-center">
            {cardData.description}
          </p>
          
          <p className="mt-4 bg-gradient-to-r from-[#e94b3c] via-[#f5c46d] via-60% to-[#e94b3c] text-center bg-clip-text text-transparent font-semibold">
            {cardData.subText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function InfoCard({
  topLabel,
  mainHeading,
  subHeading,
  description,
  imageSrc,
  buttonText = "Learn more",
  buttonLink = "#",
  subText,
  cardIndex // New prop to identify which card this is
}) {
  const [modalOpen, setModalOpen] = useState(false);

  // Card data for modal content
  const cards2 = [
    {
      mainHeading: 'Sports Training (Taekwondo & Basketball)',
      subHeading: '',
      description: "Discipline, focus, and teamwork take center court in YEL's sports programs. From Taekwondo to Basketball, youth build strength, confidence, and leadership that lasts a lifetime.",
      subText: "Train Hard. Play Smart. Lead Strong.",
      imageSrc: '/assets/teak.png',
    },
    {
      mainHeading: 'Dance',
      subHeading: 'Confidence through movement and performance',
      description: "YEL's design labs turn imagination into impact — teaching graphic, apparel, and digital design so youth can see their ideas on screens, shirts, and stages.",
      subText: "Design It. Wear It. Own It.",
    },
    {
      mainHeading: 'Design',
      subHeading: 'Design. Wear it. Digital to Physical goods.',
      description: "YEL's design labs turn imagination into impact — teaching graphic, apparel, and digital design so youth can see their ideas on screens, shirts, and stages.",
      subText: "Design It. Wear It. Own It.",
    },
    {
      mainHeading: 'Music',
      subHeading: 'Production + Performance',
      description: "Step into the studio and create your own sound. From beat-making to live DJ sets, YEL's music programs help youth turn creativity into confidence — and noise into purpose.",
      subText: "From Vision Creation.",
    },
    {
      mainHeading: 'Production',
      subHeading: 'Photography + Videography',
      description: 'Learn the art of storytelling through photography, film, and digital media. Youth master the tools to capture their ideas, shape narratives, and bring their vision to life.',
      subText: "From Vision Creation.",
    },
    {
      mainHeading: 'Life Skills',
      subHeading: 'Financial literacy + More',
      description: "Financial literacy, communication, and leadership — YEL's life-skills workshops give youth the real-world tools to take control of their futureand thrive wherever they go.",
      subText: "From Vision Creation.",
    },
  ];

  // Get the detailed card data based on index or match by title
  const getModalData = () => {
    // If cardIndex is provided, use it directly
    if (cardIndex !== undefined && cardIndex >= 0 && cardIndex < cards2.length) {
      return cards2[cardIndex];
    }
    
    // Otherwise try to find by matching the heading
    const matchingCard = cards2.find(card => card.mainHeading === mainHeading);
    return matchingCard || {
      mainHeading,
      subHeading,
      description,
      subText
    };
  };

  return (
    <>
      <div className="rounded-[16px] h-[350px] w-[auto] p-6 text-white bg-gradient-to-br from-[#4B2E84] via-[#000000] via-60% to-[#F3732A] bg-center overflow-hidden shadow-lg flex flex-col items-center justify-between font-montserrat">
        {/* Top Text Content */}
        <div className="z-10">
          {topLabel && (
            <p className="text-sm font-medium text-white/80 text">{topLabel}</p>
          )}
          <h2 className="text-2xl bg-gradient-to-r from-white via-[#f5c46d] via-60% to-[#e94b3c] bg-clip-text text-transparent font-bold leading-tight mt-1">
            {mainHeading}
          </h2>
          {subHeading && (
            <p className="text-sm font-medium text-white mt-1">
              {subHeading}
            </p>
          )}
          {description && (
            <p className="mt-4 text-sm text-[16px] text font-semibold">
              {description}
            </p>
          )}
          {subText && (
            <p className="mt-4 bg-gradient-to-r from-[#e94b3c] via-[#f5c46d] via-60% to-[#e94b3c] bg-clip-text text-transparent font-semibold leading-tight">
              {subText}
            </p>
          )}
        </div>

        {/* Bottom Section */}
        <div className="relative mt-6 flex">
          {/* Full-width Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="rounded-full bg-black/20 text-[white] border-white border px-4 py-1 transition-all hover:bg-black/30 mr-20"
          >
            {buttonText} →
          </button>

          {/* Image positioned at bottom right corner */}
          {imageSrc && (
            <img
              src={imageSrc}
              alt="card visual"
              className="absolute bottom-0 right-0 w-[100px] h-[100px] object-contain z-10"
            />
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        cardData={getModalData()}
      />
    </>
  );
}