import React from "react";
import arrowDown from "../assets/asset 0.svg";

const Header = () => {
  return (
    <div className="header w-full bg-black-600 text-white overflow-hidden">
      <div className="w-[1200px] m-auto py-2 flex justify-between items-center">
        <div className="header-left py-6 flex justify-start items-center">
          <div className="header-logo text-[25px] font-[800]">BitnByt</div>
          <ul className="mx-[50px] flex place-items-center gap-10">
            <li className="nav-links ">
              <a href="/">Home</a>
            </li>
            <li className="nav-links ">
              <a href="/about">About</a>
            </li>
            <li className="nav-links">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className="group custom-transition">
              <div className="flex gap-2 place-items-center nav-links">
                Pages
                <img src={arrowDown} alt="arrow-down" className="w-4 h-4" />
              </div>
              <div className="hidden group-hover:block absolute top-16 pt-4 z-50">
                <div className="flex p-4 bg-purple flex-col gap-5 place-items-start rounded-xl">
                  <a href="/contact" className="nav-links w-[96px]">Contact</a>
                  <a href="/team" className="nav-links w-[96px]">Team</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <button className="btn border-white hover:bg-yellow hover:border-yellow hover:text-black">
            Hire us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
