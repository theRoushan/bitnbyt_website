import React from 'react'
import Hero from '../Hero';
import Services from '../Services';
import Work from '../Work';
import About from "../About";

const HomeSection = () => {
  return (
    <div className='relative'>
      <Hero/>
      <Services/>
      <Work/>
      <About/>
    </div>
  )
}

export default HomeSection

