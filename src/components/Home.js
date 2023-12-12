import React from "react";
// import asset40 from "../assets/asset 40.svg";

const Home = (props) => {
  return (
    <div className="hero w-full bg-black-600 flex text-white overflow-hidden relative ">
      <div className="w-[1200px] h-[540px] p-auto m-auto flex justify-between items-center relative">
        <div className="w-5/12 relative">
          <h4 className="portfolio tag">{props.tag}</h4>
          <h1 className="portfolio heading">{props.heading}</h1>
        </div>
        <div className="w-6/12 h-full relative">{props.animation}</div>
      </div>
    </div>
  );
};

export default Home;
