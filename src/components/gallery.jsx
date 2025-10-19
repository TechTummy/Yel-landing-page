// import React from 'react';
// import HomeLayout from '../layouts/HomeLayout';

// export default function GallerySection() {
//       const galleryImages = [
//     { id: 1, src: '/assets/back-small.png', alt: 'Yard sale with various items' },
//     { id: 2, src: '/assets/back-small.png', alt: 'Sign post on street' },
//     { id: 3, src: '/assets/back-small.png', alt: 'Group with shopping bags' },
//     { id: 4, src: '/assets/back-small.png', alt: 'Large team gathering outdoors' },
//     { id: 5, src: '/assets/back-small.png', alt: 'Activity collage' },
//     { id: 6, src: '/assets/back-small.png', alt: 'Team on grass field' },
//     { id: 7, src: '/assets/back-small.png', alt: 'Team at tent with Hope banner' },
//     { id: 8, src: '/assets/back-small.png', alt: 'Team at tent with table display' },
//     { id: 9, src: '/assets/back-small.png', alt: 'Volunteers sorting items' },
//     { id: 10, src: '/assets/back-small.png', alt: 'Volunteers in activity' },
//     { id: 11, src: '/assets/back-small.png', alt: 'Team at foundation display' },
//     { id: 12, src: '/assets/back-small.png', alt: 'Outdoor meeting' },
//   ];
//   return (
//     <div className="bg-[#070322] pb-20">
//       <HomeLayout>
//         <div className='flex flex-col justify-center items-center'>
//             <img 
//             src='./assets/action.png'
//             className='w-[60%]'
//             />
//              <p className='text-[40px] text-semibold bg-gradient-to-r from-[#ece7d2] via-[#f5c46d] text-center via-60% to-[#e94b3c] bg-clip-text text-transparent'>Photo & Video Gallery</p>
//         </div>
//         <section className=''>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <div className="grid gap-4">
//             <div>
//             <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="/assets/gal1.JPG"
//                 alt="Gallery Image 1"
//             />
//             </div>
//             <div>
//             <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="./assets/gal2.JPG"
//                 alt="Gallery Image 2"
//             />
//             </div>
//             <div>
//             {/* <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="./assets/carou1.png"
//                 alt="Gallery Image 3"
//             /> */}
//             </div>
//         </div>

//         {/* <div className="grid gap-4">
//             <div>
//             <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="/assets/carou5.png"
//                 alt="Gallery Image 4"
//             />
//             </div>
//             <div>
//             <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="/assets/carou6.png"
//                 alt="Gallery Image 5"
//             />
//             </div>
//             <div>
//             <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="/assets/carou2.png"
//                 alt="Gallery Image 6"
//             />
//             </div>
//         </div> */}

//         {/* <div className="grid gap-4">
//             <div>
//             <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="/assets/carou9.png"
//                 alt="Gallery Image 7"
//             />
//             </div>
//             <div>
//             <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="/assets/carou9.png"
//                 alt="Gallery Image 8"
//             />
//             </div>
//             <div>
//             <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="/assets/carou3.png"
//                 alt="Gallery Image 9"
//             />
//             </div>
//         </div> */}

//         {/* <div className="grid gap-4">
//             <div>
//             <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="/assets/carou4.png"
//                 alt="Gallery Image 10"
//             />
//             </div>
//             <div>
//             <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="/assets/carou2.png"
//                 alt="Gallery Image 11"
//             />
//             </div>
//             <div>
//             <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="/assets/carou10.png"
//                 alt="Gallery Image 12"
//             />
//             </div>
//         </div> */}
//         </div>
//         </section>
//       </HomeLayout>
//     </div>
//   );
// }
import React, { useState } from "react";
import HomeLayout from "../layouts/HomeLayout";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null); // store clicked image

  const galleryImages = [
    { id: 1, src: "/assets/gal1.JPG", alt: "Gallery Image 1" },
    { id: 2, src: "/assets/gal2.JPG", alt: "Gallery Image 2" },
    { id: 3, src: "/assets/back-small.png", alt: "Gallery Image 3" },
    { id: 4, src: "/assets/back-small.png", alt: "Gallery Image 4" },
    { id: 5, src: "/assets/back-small.png", alt: "Gallery Image 5" },
    { id: 6, src: "/assets/back-small.png", alt: "Gallery Image 6" },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-[#070322] pb-20 min-h-screen">
      <HomeLayout>
        {/* Header */}
        <div className="flex flex-col justify-center items-center mb-10">
          <img src="./assets/action.png" className="w-[60%]" alt="Action" />
          <p className="text-[40px] font-semibold bg-gradient-to-r from-[#ece7d2] via-[#f5c46d] text-center via-60% to-[#e94b3c] bg-clip-text text-transparent">
            Photo & Video Gallery
          </p>
        </div>

        {/* Gallery Grid */}
        {/* <section className="px-6 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="cursor-pointer" onClick={() => handleImageClick(image)}>
                <img
                  className="h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </section> */}
         <section className=''>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
           <div>
            <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/gal1.JPG"
                alt="Gallery Image 1"
                onClick={() => handleImageClick({ src: "/assets/gal1.JPG", alt: "Gallery Image 1" })}
            />
            </div>
            <div>
            <img
                className="h-auto max-w-full rounded-lg"
                src="./assets/gal2.JPG"
                alt="Gallery Image 2"
                onClick={() => handleImageClick({ src: "./assets/gal2.JPG", alt: "Gallery Image 2" })}
            />
            </div>
            <div>
             <video
                src="/assets/yel_vid5.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
                onClick={() => handleImageClick({ src: "/assets/yel_vid5.mp4", alt: "Gallery Video" })}
            ></video>
            </div>
        </div>

        <div className="grid gap-4">
            <div>
            <video
                src="/assets/yel_vid3.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
                onClick={() => handleImageClick({ src: "/assets/yel_vid3.mp4", alt: "Gallery Video" })}
            ></video>
            </div>
            <div>
            <video
                src="/assets/yel_vid6.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
                onClick={() => handleImageClick({ src: "/assets/yel_vid4.mp4", alt: "Gallery Video" })}
            ></video>
            </div>
            <div>
           <video
                src="/assets/yel_vid7.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
                onClick={() => handleImageClick({ src: "/assets/yel_vid7.mp4", alt: "Gallery Video" })}
            ></video>
            </div>
        </div>

        <div className="grid gap-4">
            <div>
           <video
                src="/assets/yel_vid8.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
                onClick={() => handleImageClick({ src: "/assets/yel_vid8.mp4", alt: "Gallery Video" })}
            ></video>
            </div>
            <div>
           
            </div>
            <div>
            
            </div>
        </div>

        {/* <div className="grid gap-4">
            <div>
            <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/carou4.png"
                alt="Gallery Image 10"
            />
            </div>
            <div>
            <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/carou2.png"
                alt="Gallery Image 11"
            />
            </div>
            <div>
            <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/carou10.png"
                alt="Gallery Image 12"
            />
            </div>
        </div> */}
        </div>
        </section>

        {/* Fullscreen Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-4xl font-bold hover:scale-110 transition-transform"
              aria-label="Close"
            >
              ✕
            </button>


            {/* Selected Media: image or video */}
            {selectedImage.src.match(/\.(mp4|webm|ogg)$/i) ? (
              <video
                src={selectedImage.src}
                controls
                autoPlay
                className="max-w-[90%] max-h-[85%] rounded-lg shadow-lg object-contain"
              />
            ) : (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-[90%] max-h-[85%] rounded-lg shadow-lg object-contain"
              />
            )}

            {/* Optional caption */}
            <p className="text-white mt-4 text-lg text-center">{selectedImage.alt}</p>
          </div>
        )}
      </HomeLayout>
    </div>
  );
}
