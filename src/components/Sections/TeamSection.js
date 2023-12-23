import React from 'react';
import Home from '../Home';
import Contact from '../Contact';
import Footer from '../Footer';
import TeamAnimation from '../Animations/TeamAnimation';
import Team from '../Team';


const TeamSection = () => {
  return (
    <div>
      <Home tag="Team Members" heading="Our BitnByt Team" animation={<TeamAnimation/>}/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default TeamSection
