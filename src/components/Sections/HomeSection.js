import React from 'react'
import Hero from '../Hero';
import Services from '../Services';
import Work from '../Work';
import About from "../About";
import Testimonials from '../Testimonials';
const HomeSection = () => {
  return (
    <div className='relative'>
      <Hero/>
      <Services/>
      <Work/>
      <About/>
      <Testimonials/>
    </div>
  )
}

export default HomeSection

