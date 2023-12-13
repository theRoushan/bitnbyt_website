import React from 'react';
import Home from '../Home';
import Work from '../Work';
import Contact from '../Contact';
import Footer from '../Footer';
import PortfolioAnimation from '../Animations/PortfolioAnimation';

const PortFolioSection = () => {

  return (
    <div>
      <Home tag="About our Agento Agency" heading="Some of our finest work." animation={<PortfolioAnimation/>}/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default PortFolioSection
