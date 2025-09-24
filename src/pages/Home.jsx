import React from 'react'
import  Header from '../components/header'
import HeroSection from '../components/heroSection'
import SectionTwo from '../components/sectionTwo'
import Fire from '../components/fire'
import SectionWhy from '../components/sectionWhy'
import WorkshopSection from '../components/workshopSection'
import MovementSection from '../components/movementSection'
import AlumniSection from '../components/alumniSection'
import FaqSection from '../components/faq'
import Footer from '../components/footer'
import Testimonials from '../components/testimonialsSection'
import SmallCard from '../components/smallCard'





export default function Home() {
  return (
    <div>
        <Header />
        {/* <HeroSection /> */}
        {/* <Fire /> */}
        <SectionTwo />

        <SectionWhy />
          <div className=' inset-0 bg-gradient-to-t from-[#070322] via-[#070322cc]/80 to-transparent z-10 h-[100px]'></div>
        <WorkshopSection />
          {/* <div className=' inset-0 bg-gradient-to-b from-[#070322] via-[#070322cc]/80 to-transparent z-10 h-[100px]'></div> */}
        <MovementSection />
        <AlumniSection />
        <Testimonials />
        <FaqSection />
        <Footer />
        {/* Add more sections as needed */}
       

    </div>
  )
}
