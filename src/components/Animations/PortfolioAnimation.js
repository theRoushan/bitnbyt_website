import React, { useEffect, useState } from "react";
import asset10 from "../../assets/asset 10.svg";
import asset13 from "../../assets/asset 13.svg";
import asset63 from "../../assets/asset63.svg";
import asset64 from "../../assets/asset64.svg";
import asset65 from "../../assets/asset65.svg";
import asset66 from "../../assets/asset66.svg";
import asset67 from "../../assets/asset67.svg";
import { motion } from "framer-motion";

const PortfolioAnimation = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.img
        src={asset63}
        alt="portfolioillustration"
        className="absolute z-10 w-[150px] lg:w-[240px] lg:h-[230px] top-[40px] left-[-22px] lg:top-[163px] lg:left-[34px] xl:left-[24px]"
        style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.7, type: "string" }}
      />
      <motion.img
        src={asset64}
        alt="portfolioillustration"
        className="absolute z-10 w-[150px] lg:w-[240px] lg:h-[230px] bottom-[74px] right-[2px] lg:bottom-[90px] lg:left-[310px] xl:left-[340px] "
        style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.7, type: "string" }}
      />
      <motion.img
        src={asset65}
        alt="portfolioillustration"
        className="absolute z-0 w-[150px] lg:w-[240px] lg:h-[230px] top-[-30px] lg:top-[67px]"
        style={{ transform: `translateY(+${offsetY * 0.1}px)` }}
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.7, type: "string" }}
      />
      <motion.img
        src={asset66}
        alt="portfolioillustration"
        className="absolute z-0 w-[50px] lg:w-[75px] top-[10px] right-[2px] lg:top-[108px] lg:right-[72px]"
        style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.7, type: "string" }}
      />
      <motion.img
        src={asset67}
        alt="portfolioillustration"
        className="absolute z-0 top-[-4px] left-[20px] w-[30px] lg:w-auto lg:top-[105px] lg:left-[74px]"
        style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.7, type: "string" }}
      />
      <motion.img
        src={asset10}
        alt="portfolioillustration"
        className="absolute lg:w-[11px] w-[14px] top-[58px] right-[-28px] lg:top-[182px] lg:right-[24px]"
        style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.7, type: "string" }}
      />
      <motion.img
        src={asset13}
        alt="portfolioillustration"
        className="absolute lg:w-[18px] w-[16px] bottom-[90px] left-[50px] lg:bottom-[114px] z-40 lg:left-[172px]"
        style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.7, type: "string" }}
      />
      <motion.img
        src={asset13}
        alt="portfolioillustration"
        className="absolute z-0 w-[16px] lg:w-[20px] top-[-20px] left-[2px] lg:top-[56px] lg:left-[76px]"
        style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.7, type: "string" }}
      />
    </div>
  );
};

export default PortfolioAnimation;
