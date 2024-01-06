import React from "react";
import asset40 from "../assets/asset 40.svg";
import asset41 from "../assets/asset 41.svg";
import asset42 from "../assets/asset 42.svg";
import asset43 from "../assets/asset 43.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full xl:w-[1200px] px-[4%] xl:px-0 pt-[60px] md:pt-[100px] m-auto xl:pt-[140px] pb-8 text-black-800">
      <div className="w-full gap-4 flex flex-wrap justify-between pb-10 border-b border-light-gray">
        <motion.div
          className="lg:w-4/12 flex flex-col gap-4 xl:gap-32 mb-10"
          initial={{ opacity: 0, y: "60px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: "string" }}
          viewport={{ once: true }}
        >
          <div>
            <h1 className="text-[26px] lg:text-[30px] font-bold mb-4">
              BitnByt
            </h1>
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
        </motion.div>
        <motion.ul
          className="w-[260px]"
          initial={{ opacity: 0, y: "60px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: "string" }}
          viewport={{ once: true }}
        >
          <li className="text-xl lg:text-[22px] mb-[25px] font-semibold">
            Pages
          </li>
          <li className="font-[500] text-[black-400] my-4 text-base lg:text-[18px] hover:text-yellow custom-transition">
            <Link to="#url">UI/UX design</Link>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-base lg:text-[18px] hover:text-yellow custom-transition">
            <Link to="#url">Framer development</Link>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-base lg:text-[18px] hover:text-yellow custom-transition">
            <Link to="#url">Digital marketing</Link>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-base lg:text-[18px] hover:text-yellow custom-transition">
            <Link to="#url">React Development</Link>
          </li>
        </motion.ul>
        <motion.ul
          className="w-[200px]"
          initial={{ opacity: 0, y: "60px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: "string" }}
          viewport={{ once: true }}
        >
          <li className="text-xl lg:text-[22px] mb-[25px] font-semibold">
            Services
          </li>
          <li className="font-[500] text-[black-400] my-4 text-base lg:text-[18px] hover:text-yellow custom-transition">
            <Link to="/">Home</Link>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-base lg:text-[18px] hover:text-yellow custom-transition">
            <Link to="/about">About Us</Link>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-base lg:text-[18px] hover:text-yellow custom-transition">
            <Link to="/portfolio">Works</Link>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-base lg:text-[18px] hover:text-yellow custom-transition">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-base lg:text-[18px] hover:text-yellow custom-transition">
            <Link to="/team">Team</Link>
          </li>
        </motion.ul>
        <motion.ul
          className="w-[250px]"
          initial={{ opacity: 0, y: "60px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: "string" }}
          viewport={{ once: true }}
        >
          <li className="text-xl lg:text-[22px] mb-[25px] font-semibold">
            Want to work with us?
          </li>
          <li className="font-[500] text-[black-400] my-4 text-base lg:text-[18px] hover:text-yellow custom-transition">
            <Link to="#url">bitnbyt@gmail.com</Link>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-base lg:text-[18px] text-purple hover:text-yellow custom-transition">
            <Link to="#url">+91 27389829439</Link>
          </li>
          <li className="font-[500] text-[black-400] my-4 text-base lg:text-[18px]">
            <p>55/53 Jay Path Apt. 908</p>
          </li>
        </motion.ul>
      </div>
      <motion.div
        className="w-full flex flex-col sm:flex-row gap-4 items-center sm:justify-between pt-6"
        initial={{ opacity: 0, y: "60px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, type: "string" }}
        viewport={{ once: true }}
      >
        <p className="text-gray-dark">&copy; Copyright BitnByt.com</p>
        <p className="font-[500]">
          <Link to="#url">Terms and Condition</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
