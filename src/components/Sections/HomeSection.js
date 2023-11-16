import React from 'react'
import Hero from '../Hero';
import Services from '../Services';
import Work from '../Work';
import About from "../About";
import Testimonials from '../Testimonials';
import Contact from '../Contact';

const HomeSection = () => {
  return (
    <div className='relative'>
      <Hero/>
      <Services/>
      <Work/>
      <About/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default HomeSection

