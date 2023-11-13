import React, { useState } from "react";

const Header = () => {
  return (
    <div className="header w-full bg-black-600 text-white overflow-hidden">
      <div className="w-[1200px] m-auto py-2 flex justify-between items-center">
        <div className="header-left py-6 flex justify-start items-center">
          <div className="header-logo text-[25px] font-[800]">BitnByt</div>
          <ul className="mx-[50px] flex place-items-center gap-10">
            <li className="nav-links ">
              <a href="#hey">Home</a>
            </li>
            <li className="nav-links ">
              <a href="#hey">About</a>
            </li>
            <li className="nav-links">
              <a href="#hey">Portfolio</a>
            </li>
            <li className="nav-links">
              <a href="#hey">Contact</a>
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
