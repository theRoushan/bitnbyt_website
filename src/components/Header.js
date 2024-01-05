import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import arrowDown from "../assets/asset 0.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="header w-full bg-black-600 text-white overflow-hidden">
      <div className="w-full px-[4%] xl:px-0 xl:w-[1200px] m-auto py-2 flex justify-between items-center">
        <div className="header-left py-6 flex justify-start items-center">
          <div className="header-logo text-[25px] font-[800]">BitnByt</div>
          <div className="hidden md:block">
            <ul className="mx-[50px] flex place-items-center gap-10">
              <li className="nav-links ">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-links ">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-links">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="group custom-transition">
                <div className="flex gap-2 place-items-center nav-links">
                  Pages
                  <img src={arrowDown} alt="arrow-down" className="w-4 h-4" />
                </div>
                <div className="hidden group-hover:block absolute top-16 pt-4 z-50">
                  <div className="flex p-4 bg-purple flex-col gap-5 place-items-start rounded-xl">
                    <Link to="/contact" className="nav-links w-[96px]">
                      Contact
                    </Link>
                    <Link to="/team" className="nav-links w-[96px]">
                      Team
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-right hidden md:block">
          <button className="btn border-white hover:bg-yellow hover:border-yellow hover:text-black">
            Hire us
          </button>
        </div>
        <div className="block md:hidden">
          <div>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={26}
              direction="right"
            />
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute z-[80] left-0 top-20 rounded-xl w-full `}
          >
            <div className="bg-white p-4 w-[90%] mx-auto mt-4 rounded-xl relative">
              <ul className="bg-black-800 rounded-xl flex flex-col place-items-center">
                <li className="nav-links py-4">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-links py-4">
                  <Link to="/about">About</Link>
                </li>
                <li className="nav-links py-4">
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-links py-4">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="nav-links py-4">
                  <Link to="/team">Team</Link>
                </li>
                <button className="btn border-white hover:bg-yellow my-4 hover:border-yellow hover:text-black">
                  Hire us
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
