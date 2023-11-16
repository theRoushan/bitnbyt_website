import React from "react";
import assest30 from "../assets/asset 30.png";

const Testimonials = () => {
  return (
    <div className="w-full h-screen flex relative">
      <img src={assest30} alt="background" className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="w-[1200px] m-auto p-auto relative z-10 flex flex-col place-items-center">
        <h1 className="text-[40px] leading-[48px] mb-5 font-bold w-4/12 text-center">
          What our awesome customers say
        </h1>
        <p className="info-text w-6/12 text-center">
          Our team has a successful track record of helping brands scale
          profitably based on high-performing strategies.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Testimonials;
