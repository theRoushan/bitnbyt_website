import React from "react";
import { services } from "../constants/constant";

const Services = () => {
  return (
    <div className="relative flex flex-wrap lg:flex-nowrap justify-start gap-[60px] lg:gap-[80px] w-full lg:w-[1200px] m-auto pt-[50px] lg:[pt-[155px] px-[4%]">
      <div className="services-left relative w-full lg:w-4/12">
        <h1 className="text-[32px] lg:text-[40px] lg:leading-[48px] mb-5 font-bold">
          Services we can help you with
        </h1>
        <p className="info-text">
          Corporate strategy collaborative value proposition.
        </p>
      </div>
      <div className="w-full lg:w-8/12 relative grid lg:grid-cols-2 gap-[60px]">
        {services.map((item) => {
          return (
            <div key={item.imgUrl}>
              <div className="w-[60px] h-[60px] border border-black rounded-full flex items-center justify-center mb-[10px]">
                <img src={item.imgUrl} className="w-[30px]" alt="img"/>
              </div>
              <h2 className="text-[24px] leading-[36px] font-bold text-left mb-[10px]">
                {item.title}
              </h2>
              <p className="info-text">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
