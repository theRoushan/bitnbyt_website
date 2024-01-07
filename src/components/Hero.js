import React, { useEffect, useState } from "react";
import asset1 from "../assets/asset 1.svg";
import asset2 from "../assets/asset 2.svg";
import asset3 from "../assets/asset 3.svg";
import asset4 from "../assets/asset 4.svg";
import asset5 from "../assets/asset 5.svg";
import asset6 from "../assets/asset 6.svg";
import asset7 from "../assets/asset 7.svg";
import asset8 from "../assets/asset 8.svg";
import asset9 from "../assets/asset 9.svg";
import asset10 from "../assets/asset 10.svg";
import asset12 from "../assets/asset 12.svg";
import asset11 from "../assets/asset 11.svg";
import asset13 from "../assets/asset 13.svg";
import { motion } from "framer-motion";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="hero w-full pb-[100px] bg-black-600 flex text-white overflow-hidden relative">
      <div className="w-full flex flex-wrap xl:w-[1200px] lg:h-[750px] m-auto relative px-[3%] xl:px-0">
        <motion.div
          className="h-full hero-left w-full lg:w-1/2 py-[30px] lg:py-[175px] text-center lg:text-start"
          initial={{ opacity: 0, y: "60px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, type: "string" }}
          viewport={{ once: true }}
        >
          <h4 className="tag">BitnByt - Bits of Byte Brilliance.</h4>
          <h1 className="heading">We are a digital marketing agency</h1>
          <p className="text-base lg:text-lg lg:leading-[27px] mb-[30px]">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking value proposition.
          </p>
          <div>
            <form
              className="flex flex-wrap xl:flex-nowrap justify-center lg:justify-start gap-4 relative z-0"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                name="email"
                placeholder="Your email here"
                className="py-[14px] px-8 text-sm md:text-lg border rounded-full w-10/12 sm:w-6/12 lg:w-8/12 focus:outline-purple text-black "
              />
              <button className="btn bg-yellow border-yellow text-black hover:text-white hover:bg-transparent">
                Contact Us
              </button>
            </form>
          </div>
        </motion.div>
        <div
          className="hero-right w-[350px] h-[400px] m-auto lg:w-1/2 lg:h-full relative"
        >
          <motion.img
            src={asset1}
            alt="green-circle"
            className="absolute left-[-40px] lg:bottom-[107px] lg:left-[-589px] w-[15px] lg:w-[18px] lg:h-[18px] object-contain"
            style={{ transform: `translateY(+${offsetY * 0.1}px)` }}
            initial={{ opacity: 0, scale:0.9, y: 60 }}
            whileInView={{ opacity: 1, scale:1, y:0}}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7, type: "string" }}
          />
          <motion.img
            src={asset2}
            alt="orange-plus"
            className="absolute top-[-343px] left-[-30px] lg:top-[233px] lg:left-[-669px] w-[15px] lg:w-[18px] lg:h-[18px] object-contain"
            style={{ transform: `translateY(+${offsetY * 0.2}px)` }}
            initial={{ opacity: 0, scale:0.9 , y:60}}
            whileInView={{ opacity: 1, scale:1, y:0}}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7, type: "string" }}
          />
          <motion.img
            src={asset3}
            alt="graph"
            className="absolute left-[50px] top-[110px] lg:left-[110px] lg:top-[204px] w-[250px] lg:w-[380px] lg:h-[330px] object-contain"
            style={{ transform: `translateY(+${offsetY * 0.2}px)` }}
            initial={{ opacity: 0, scale:0.9 , y:60}}
            whileInView={{ opacity: 1, scale:1, y:0}}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.7, type: "string" }}
          />
          <motion.img
            src={asset4}
            alt="speaker"
            className="absolute left-[66px] top-[26px] lg:left-[45px] lg:top-[44px] w-[100px] lg:w-[180px] lg:h-[130px] object-contain "
            style={{ transform: `translateY(+${offsetY * 0.2}px)` }}
            initial={{ opacity: 0, scale:0.9 , y:60}}
            whileInView={{ opacity: 1, scale:1, y:0}}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.7, type: "string" }}
          />
          <motion.img
            src={asset5}
            alt="likes"
            className="absolute left-[24px] top-[146px] lg:left-[35px] lg:top-[263px] w-[70px] lg:w-[100px] lg:h-[90px] object-contain"
            initial={{ opacity: 0, scale:0.9 , y:60}}
            whileInView={{ opacity: 1, scale:1, y:0}}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.7, type: "string" }}
          />
          <motion.img
            src={asset6}
            alt="graph"
            className="absolute left-[60px] bottom-[-20px] lg:bottom-[167px] lg:left-[40px] w-[80px] lg:w-[90px] object-contain"
            style={{ transform: `translateY(-${offsetY * 0.15}px)` }}
            initial={{ opacity: 0, scale:0.9 , y:60}}
            whileInView={{ opacity: 1, scale:1, y:0}}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.7, type: "string" }}
          />
          <motion.img
            src={asset7}
            alt="graph"
            className="absolute top-[66px] right-[32px] lg:top-[128px] lg:right-[44px] w-[150px] lg:w-[200px] lg:h-[130px] object-contain"
            style={{ transform: `translateY(-${offsetY * 0.05}px)` }}
            initial={{ opacity: 0, scale:0.9 , y:60}}
            whileInView={{ opacity: 1, scale:1, y:0}}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.7, type: "string" }}
          />
          <motion.img
            src={asset8}
            alt="video"
            className="absolute bottom-[-8px] right-[36px] lg:bottom-[118px] lg:right-[19px] w-[150px] lg:w-[210px] lg:h-[175px] object-contain"
            style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
            initial={{ opacity: 0, scale:0.9 , y:60}}
            whileInView={{ opacity: 1, scale:1, y:0}}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.7, type: "string" }}
          />
          <motion.img
            src={asset9}
            alt="pink-circle"
            className="absolute top-[92px]  left-[32px] lg:top-[175px] lg:left-[-20px] w-[15px] lg:w-[18px] lg:h-[18px]  object-contain"
            style={{ transform: `translateY(+${offsetY * 0.1}px)` }}
            initial={{ opacity: 0, scale:0.9 , y:60}}
            whileInView={{ opacity: 1, scale:1, y:0}}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7, type: "string" }}
          />
          <motion.img
            src={asset10}
            alt="orange-circle"
            className="absolute top-[178px] right-[40px] lg:bottom-[345px] lg:right-0 w-[15px] lg:w-[18px] lg:h-[18px] object-contain"
            style={{ transform: `translateY(+${offsetY * 0.15}px)` }}
            initial={{ opacity: 0, scale:0.9 , y:60}}
            whileInView={{ opacity: 1, scale:1, y:0}}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4, type: "string" }}
          />
          <motion.img
            src={asset11}
            alt="blue-plus"
            className="absolute left-[134px] top-[107px] lg:left-[255px] lg:top-[66px] w-[15px] lg:w-[18px] lg:h-[18px] object-contain"
            initial={{ opacity: 0, scale:0.9 , y:60}}
            whileInView={{ opacity: 1, scale:1, y:0}}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.7, type: "string" }}
          />
          <motion.img
            src={asset12}
            alt="green-plus"
            className="absolute top-[252px] right-[50px] lg:top-[299px] lg:right-[59px] w-[15px] lg:w-[18px] lg:h-[18px] object-contain"
            style={{ transform: `translateY(+${offsetY * 0.15}px)` }}
            initial={{ opacity: 0, scale:0.9 , y:60}}
            whileInView={{ opacity: 1, scale:1, y:0}}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.7, type: "string" }}
          />
          <motion.img
            src={asset13}
            alt="star"
            className="absolute right-[40px] top-[6px] lg:top-[82px] lg:right-[0px]"
            style={{ transform: `translateY(+${offsetY * 0.1}px)` }}
            initial={{ opacity: 0, scale:0.9 , y:60}}
            whileInView={{ opacity: 1, scale:1, y:0}}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7, type: "string" }}
          />
          <motion.img
            src={asset13}
            alt="star"
            className="absolute bottom-[-80px] left-[80px] lg:bottom-[117px] lg:left-[210px] z-0"
            style={{ transform: `translateY(+${offsetY * 0.2}px)` }}
            initial={{ opacity: 0, scale:0.9 , y:60}}
            whileInView={{ opacity: 1, scale:1, y:0}}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7, type: "string" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
