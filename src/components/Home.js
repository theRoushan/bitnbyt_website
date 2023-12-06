import React from "react";
// import asset40 from "../assets/asset 40.svg";

const Home = (props) => {
  return (
    <div className="hero w-full bg-black-600 flex text-white overflow-hidden relative ">
      <div className="w-[1200px] m-auto py-[100px] flex justify-between items-center">
        <div className="w-5/12">
          <h4 className="portfolio tag">{props.tag}</h4>
          <h1 className="portfolio heading">{props.heading}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
