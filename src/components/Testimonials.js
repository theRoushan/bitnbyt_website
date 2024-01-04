import React from "react";
import assest30 from "../assets/asset 30.png";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { testimonials } from "../constants/constant";

const Testimonials = () => {
  return (
    <div className="w-full min-h-screen flex relative">
      <img
        src={assest30}
        alt="background"
        className="absolute top-0 left-0 w-full h-full z-0 object-cover"
      />
      <div className="w-full xl:w-[1200px] px-[4%] xl:px-0 m-auto relative py-[60px] md:py-[100px] xl:py-[140px] z-10 flex flex-col place-items-center">
        <h1 className="text-[32px] md:text-[36px] xl:text-[40px] leading-[40px] xl:leading-[48px] mb-5 font-bold md:w-[60%] lg:w-4/12 text-center">
          What our awesome customers say
        </h1>
        <p className="info-text md:w-8/12 lg:w-6/12 text-center mb-12">
          Our team has a successful track record of helping brands scale
          profitably based on high-performing strategies.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((item) => {
            return (
              <div key={item.name} className="w-full bg-white rounded-[36px] px-5 py-10 flex flex-col place-items-center">
                <img src={item.imgUrl} alt="client-profile" className="w-[90px] h-[90px] object-cover rounded-full mb-5"/>
                <h3 className="text-[20px] font-[500]">{item.name}</h3>
                <p className="info-text mb-5">{item.role}</p>
                <p className="text-[20px] mb-5">{'"' +  item.comment + '"' }</p>
                <p className="text-yellow text-[30px]">
                  <StarRoundedIcon fontSize="inherit"/>
                  <StarRoundedIcon fontSize="inherit"/>
                  <StarRoundedIcon fontSize="inherit"/>
                  <StarRoundedIcon fontSize="inherit"/>
                  <StarRoundedIcon fontSize="inherit"/>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
