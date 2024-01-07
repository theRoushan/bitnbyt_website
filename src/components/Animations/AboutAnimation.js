import React, { useState, useEffect } from "react";
import asset57 from "../../assets/asset57.svg";
import asset58 from "../../assets/asset58.svg";
import asset59 from "../../assets/asset59.svg";
import asset60 from "../../assets/asset60.svg";
import asset61 from "../../assets/asset61.svg";
import asset62 from "../../assets/asset62.svg";
import asset11 from "../../assets/asset 11.svg";
import asset12 from "../../assets/asset 12.svg";
import asset13 from "../../assets/asset 13.svg";
import asset10 from "../../assets/asset 10.svg";
import asset9 from "../../assets/asset 9.svg";
import asset4 from "../../assets/asset 4.svg";
import { motion } from "framer-motion";

const AboutAnimation = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(document.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="w-full h-full relative">
        <motion.img
          src={asset4}
          alt="speaker"
          className="transform scale-x-[-1] w-[66px] lg:w-[90px] lg:h-[70px] absolute top-[-52px] left-[106px] lg:top-[17px] lg:left-[230px]"
          style={{ transform: `scaleX(-1) translateY(-${offsetY * 0.25}px)` }}
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7, type: "string" }}
        />
        <motion.img
          src={asset9}
          alt="pinkcircle"
          className="absolute w-4 lg:w-auto top-[8px] left-[12px] lg:top-[96px] lg:left-[52px] z-30"
          style={{ transform: `translateY(+${offsetY * 0.15}px)` }}
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7, type: "string" }}
        />
        <motion.img
          src={asset10}
          alt="orangecircle"
          className="absolute w-4 lg:w-auto bottom-[116px] right-[12px] lg:bottom-[179px] lg:right-[68px]"
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.7, type: "string" }}
        />
        <motion.img
          src={asset13}
          alt="star"
          className="absolute w-[16px] top-[32px] right-[-6px] lg:top-[76px] lg:right-[72px] lg:w-[21px] lg:h-[21px] z-40"
          style={{ transform: `translateY(+${offsetY * 0.2}px)` }}
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7, type: "string" }}
        />
        <motion.img
          src={asset13}
          alt="star"
          className="absolute right-[60px] bottom-[120px] lg:bottom-[100px] w-3 lg:w-4 lg:right-[208px]"
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.9, type: "string" }}
        />
        <motion.img
          src={asset12}
          alt="greenplussign"
          className="absolute w-4 right-[0px] top-[100px] lg:w-[18px] lg:h-[18px] lg:top-[221px] lg:right-[86px]"
          style={{ transform: `translateY(+${offsetY * 0.2}px)` }}
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7, type: "string" }}
        />
        <motion.img
          src={asset11}
          alt="blueplussign"
          className="absolute top-[-20px] w-4 left-[80px] lg:top-[38px] lg:left-[166px]"
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7, type: "string" }}
        />
        <motion.img
          src={asset57}
          alt="pinkplussign"
          className="absolute w-3 top-[132px] left-[22px] lg:w-[18px] lg:h-[18px] lg:top-[312px] lg:left-[86px]"
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7, type: "string" }}
        />
        <motion.img
          src={asset58}
          alt="mobileillustration"
          className="absolute w-[120px] top-[-18px] right-0 lg:w-auto lg:top-[52px] lg:left-[300px] z-0"
          style={{ transform: `translateY(-${offsetY * 0.05}px)` }}
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7, type: "string" }}
        />
        <motion.img
          src={asset59}
          alt="boy"
          className="absolute w-[110px] left-[38px] lg:top-[74px] lg:left-[121px] lg:w-[150px]"
          style={{ transform: `translateY(-${offsetY * 0.15}px)` }}
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7, type: "string" }}
        />
        <motion.img
          src={asset60}
          alt="greentextbox"
          className="absolute w-[60px] bottom-[80px] lg:w-auto lg:bottom-[145px] right-[90px] lg:right-[232px] z-20"
          style={{ transform: `translateY(-${offsetY * 0.25}px)` }}
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.7, type: "string" }}
        />
        <motion.img
          src={asset61}
          alt="balcktextbox"
          className="absolute w-[60px] top-[86px] left-[6px] lg:top-[214px] lg:left-[54px] lg:w-[110px] lg:h-[50px]"
          style={{ transform: `translateY(-${offsetY * 0.08}px)` }}
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7, type: "string" }}
        />
        <motion.img
          src={asset62}
          alt="whitetextbox"
          className="absolute w-[60px] top-[34px] left-[-24px] lg:top-[136px] lg:left-[12px] lg:w-[110px] lg:h-[50px]"
          style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7, type: "string" }}
        />
      </div>
    </>
  );
};

export default AboutAnimation;
