import React from "react";
// import asset40 from "../assets/asset 40.svg";

const Home = (props) => {
  return (
    <div className="hero w-full bg-black-600 flex text-white overflow-hidden relative ">
      <div className="w-full lg:w-[1200px] p-[4%]  lg:h-[540px] lg:py-0 xl:p-0 p-auto m-auto flex flex-wrap gap-12 lg:gap-3 lg:flex-nowrap lg:justify-between justify-center items-center relative">
        <div className="w-full lg:w-5/12 xl:w-6/12 relative xl:pr-[10%] text-center lg:text-start">
          <h4 className="portfolio tag">{props.tag}</h4>
          <h1 className="portfolio heading">{props.heading}</h1>
        </div>
        {props.animation && (
          <div className="w-[280px] h-[300px] lg:w-7/12 xl:w-6/12 lg:h-full relative">{props.animation}</div>
        )}
      </div>
    </div>
  );
};

export default Home;
