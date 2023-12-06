import React from 'react'
import Hero from '../Hero';
import Services from '../Services';
import Work from '../Work';
import About from "../About";
import Testimonials from '../Testimonials';
import Contact from '../Contact';
import Footer from '../Footer';

const HomeSection = () => {
  return (
    <div className='relative'>
      <Hero/>
      <Services/>
      <Work heading="Some of our finest work." desc="Corporate strategy collaborative value proposition."/>
      <About/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomeSection

