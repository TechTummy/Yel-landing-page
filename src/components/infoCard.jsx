import React from 'react';

export default function InfoCard({
  topLabel,
  mainHeading,
  subHeading,
  description,
  imageSrc,
  buttonText = "Learn more",
  buttonLink = "#",
  subText
}) {
  return (
    <div className="relative rounded-[16px] h-[350px] w-[auto] p-6 text-white bg-[url('./assets/cardback.png')] bg-center overflow-hidden shadow-lg flex flex-col items-center justify-between font-montserrat">
      {/* Top Text Content */}
      <div className="z-10">
        {/* {topLabel && (
          <p className="text-sm font-medium text-white/80 text-center">{topLabel}</p>
        )} */}
        <h2 className="text-2xl bg-gradient-to-r from-white via-[#f5c46d] text-center via-60% to-[#e94b3c] bg-clip-text text-transparent font-bold leading-tight mt-1">
          {mainHeading}
        </h2>
        {/* {subHeading && (
          <p className="text-sm font-medium text-white mt-1">
            {subHeading}
          </p>
        )} */}
        {description && (
          <p className="mt-4 text-sm text-[16px] text-center font-semibold">
            {description}
          </p>
        )}
        {subText && (
          <p className="mt-4 bg-gradient-to-r from-[#e94b3c] via-[#f5c46d] text-center via-60% to-[#e94b3c] bg-clip-text text-transparent font-semibold leading-tight">
            {subText}
          </p>
        )}
      </div>

      {/* Bottom Section */}
      <div className="relative mt-6">
        {/* Full-width Button */}
        {/* <a
          href={buttonLink}
          className="absolute left-0 bottom-0 w-[70%] border text-white text-xs text-center py-2 rounded-2xl font-semibold hover:bg-opacity-90 transition-all z-20"
        >
          {buttonText} →
        </a> */}

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
  );
}
