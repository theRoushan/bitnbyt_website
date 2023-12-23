import React from "react";
import asset40 from "../assets/asset 40.svg";
import asset41 from "../assets/asset 41.svg";
import asset42 from "../assets/asset 42.svg";
import asset43 from "../assets/asset 43.svg";

const Footer = () => {
  return (
    <div className="w-[1200px] m-auto pt-[140px] pb-8 text-black-800">
      <div className="w-full flex justify-between pb-10 border-b border-light-gray">
        <div className="w-4/12 flex flex-col gap-32">
          <div>
            <h1 className="text-[30px] font-bold mb-4">BitnByt</h1>
            <p className="info-text">
              Our team has a successful track record of helping brands scale
              profitably based high-performing strategies.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="p-3 rounded-full bg-black-400 w-12 h-12 flex justify-center items-center hover:cursor-pointer hover:bg-purple custom-transition">
              <img src={asset40} width={30} alt="instagram" />
            </div>
            <div className="p-3 rounded-full bg-black-400  w-12 h-12 flex justify-center items-center hover:cursor-pointer hover:bg-purple custom-transition">
              <img src={asset41} width={30} alt="facebook" />
            </div>
            <div className="p-3 rounded-full bg-black-400 w-12 h-12 flex justify-center items-center hover:cursor-pointer hover:bg-purple custom-transition">
              <img src={asset42} width={30} alt="twitter" />
            </div>
            <div className="p-3 rounded-full bg-black-400  w-12 h-12 flex justify-center items-center hover:cursor-pointer hover:bg-purple custom-transition">
              <img src={asset43} width={30} alt="linkedin" />
            </div>
          </div>
        </div>
        <ul>
          <li className="text-[22px] mb-[25px] font-semibold">Pages</li>
          <li className="font-[500] text-[black-400] my-4 text-[18px] hover:text-yellow custom-transition">
            <a href="#url">UI/UX design</a>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-[18px] hover:text-yellow custom-transition">
            <a href="#url">Framer development</a>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-[18px] hover:text-yellow custom-transition">
            <a href="#url">Digital marketing</a>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-[18px] hover:text-yellow custom-transition">
            <a href="#url">React Development</a>
          </li>
        </ul>
        <ul>
          <li className="text-[22px] mb-[25px] font-semibold">Services</li>
          <li className="font-[500] text-[black-400] my-4 text-[18px] hover:text-yellow custom-transition">
            <a href="/home">Home</a>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-[18px] hover:text-yellow custom-transition">
            <a href="/about">About Us</a>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-[18px] hover:text-yellow custom-transition">
            <a href="#url">Blog</a>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-[18px] hover:text-yellow custom-transition">
            <a href="/contact">Contact</a>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-[18px] hover:text-yellow custom-transition">
            <a href="/team">Team</a>
          </li>
        </ul>
        <ul>
          <li className="text-[22px] mb-[25px] font-semibold">
            Want to work with us?
          </li>
          <li className="font-[500] text-[black-400] my-4 text-[18px] hover:text-yellow custom-transition">
            <a href="#url">bitnbyt@gmail.com</a>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-[18px] text-purple hover:text-yellow custom-transition">
            <a href="#url">+91 27389829439</a>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-[18px]">
            <p>55/53 Jay Path Apt. 908</p>
          </li>
        </ul>
      </div>
      <div className="flex justify-between pt-6">
        <p className="text-gray-dark">&copy; Copyright BitnByt.com</p>
        <p className="font-[500]">
          <a href="#url">Terms and Condition</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
