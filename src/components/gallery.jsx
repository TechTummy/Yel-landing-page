import React from 'react';
import HomeLayout from '../layouts/HomeLayout';

export default function GallerySection() {
      const galleryImages = [
    { id: 1, src: '/assets/back-small.png', alt: 'Yard sale with various items' },
    { id: 2, src: '/assets/back-small.png', alt: 'Sign post on street' },
    { id: 3, src: '/assets/back-small.png', alt: 'Group with shopping bags' },
    { id: 4, src: '/assets/back-small.png', alt: 'Large team gathering outdoors' },
    { id: 5, src: '/assets/back-small.png', alt: 'Activity collage' },
    { id: 6, src: '/assets/back-small.png', alt: 'Team on grass field' },
    { id: 7, src: '/assets/back-small.png', alt: 'Team at tent with Hope banner' },
    { id: 8, src: '/assets/back-small.png', alt: 'Team at tent with table display' },
    { id: 9, src: '/assets/back-small.png', alt: 'Volunteers sorting items' },
    { id: 10, src: '/assets/back-small.png', alt: 'Volunteers in activity' },
    { id: 11, src: '/assets/back-small.png', alt: 'Team at foundation display' },
    { id: 12, src: '/assets/back-small.png', alt: 'Outdoor meeting' },
  ];
  return (
    <div className="bg-[#070322] pb-20">
      <HomeLayout>
        <div className='flex flex-col justify-center items-center'>
            <img 
            src='./assets/action.png'
            className='w-[60%]'
            />
             <p className='text-[40px] text-semibold bg-gradient-to-r from-[#ece7d2] via-[#f5c46d] text-center via-60% to-[#e94b3c] bg-clip-text text-transparent'>Photo & Video Gallery</p>
        </div>
        <section className=''>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
            <div>
            <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/gal1.JPG"
                alt="Gallery Image 1"
            />
            </div>
            <div>
            <img
                className="h-auto max-w-full rounded-lg"
                src="./assets/gal2.JPG"
                alt="Gallery Image 2"
            />
            </div>
            <div>
            {/* <img
                className="h-auto max-w-full rounded-lg"
                src="./assets/carou1.png"
                alt="Gallery Image 3"
            /> */}
            </div>
        </div>

        {/* <div className="grid gap-4">
            <div>
            <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/carou5.png"
                alt="Gallery Image 4"
            />
            </div>
            <div>
            <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/carou6.png"
                alt="Gallery Image 5"
            />
            </div>
            <div>
            <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/carou2.png"
                alt="Gallery Image 6"
            />
            </div>
        </div> */}

        {/* <div className="grid gap-4">
            <div>
            <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/carou9.png"
                alt="Gallery Image 7"
            />
            </div>
            <div>
            <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/carou9.png"
                alt="Gallery Image 8"
            />
            </div>
            <div>
            <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/carou3.png"
                alt="Gallery Image 9"
            />
            </div>
        </div> */}

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
      </HomeLayout>
    </div>
  );
}
