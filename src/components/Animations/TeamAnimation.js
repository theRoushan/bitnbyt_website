import React, { useEffect, useState } from "react";
import asset74 from "../../assets/asset74.svg";
import asset75 from "../../assets/asset75.svg";
import asset76 from "../../assets/asset76.svg";
import asset77 from "../../assets/asset77.svg";
import asset78 from "../../assets/asset78.svg";
import asset12 from "../../assets/asset 12.svg";
import asset9 from "../../assets/asset 9.svg";
import asset11 from "../../assets/asset 11.svg";
import asset13 from "../../assets/asset 13.svg";
import asset10 from "../../assets/asset 10.svg";
import asset57 from "../../assets/asset57.svg";
import { motion } from "framer-motion";



const TeamAnimation = () => {
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
    <div >
      <motion.img
        src={asset75}
        alt="teamillustration"
        className="w-[280px] top-[-20px] lg:w-[500px] h-[290px] object-contain absolute lg:top-[105px] lg:left-[18px]"
        style={{transform: `translateY(+${offsetY * 0.15}px)`}}
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.7, type: "string" }}
      />
      <motion.img
        src={asset74}
        alt="curve"
        className="w-[30px] lg:w-[40px] h-[20px] object-contain absolute top-[76px] lg:top-[168px] left-[86px] lg:left-[194px]"
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.7, type: "string" }}
      />
      <motion.img
        src={asset78}
        alt="curves"
        className="w-[23px] lg:w-[30px] h-[25px] object-contain absolute top-[102px] lg:top-[193px] left-[17px] lg:left-[83px]"
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.7, type: "string" }}
      />
      <motion.img
        src={asset76}
        alt="curves"
        className="w-[30px] lg:w-[40px] h-[20px] object-contain absolute top-[166px] left-[16px] lg:top-[320px] lg:left-[63px] "
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.7, type: "string" }}
      />
      <motion.img
        src={asset78}
        alt="curves"
        className="w-[24px] lg:w-[40px] object-contain absolute top-[112px] lg:top-[198px] right-[32px] lg:right-[119px]"
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6, type: "string" }}
      />
      <motion.img
        src={asset77}
        alt="curves"
        className="w-[30px] lg:w-[40px] h-[20px] object-contain absolute right-[18px] bottom-[102px] lg:bottom-[182px] lg:right-[121px]"
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6, type: "string" }}
      />
      <motion.img
        src={asset12}
        alt="green-plus"
        className="w-[12px] lg:w-[18px] lg:h-[18px] object-contain absolute top-[90px] lg:top-[230px] right-[-30px] lg:right-[64px]"
        style={{transform: `translateY(-${offsetY * 0.1}px)`}}
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6, type: "string" }}
      />
      <motion.img
        src={asset57}
        alt="pink-plus"
        className="w-[12px] lg:w-[18px] lg:h-[18px] object-contain absolute bottom-[90px] lg:bottom-[154px] left-[-24px] lg:left-[-16px]"
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6, type: "string" }}
      />
      <motion.img
        src={asset10}
        alt="orange-circle"
        className="w-[12px] lg:w-[18px] lg:h-[18px] object-contain absolute bottom-[110px] lg:bottom-[163px] right-[-30px] lg:right-[42px]"
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6, type: "string" }}
      />
      <motion.img
        src={asset13}
        alt="star"
        className="w-[12px] lg:w-[18px] lg:h-[18px] object-contain absolute bottom-[60px] right-[80px] lg:bottom-[104px] lg:right-[240px]"
        style={{transform: `translateY(+${offsetY * 0.1}px)`}}
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6, type: "string" }}
      />
      <motion.img
        src={asset13}
        alt="star"
        className="w-[20px] lg:w-[25px] lg:h-[25px] absolute top-0 right-[-24px] lg:top-[56px] lg:right-[69px]"
        style={{transform: `translateY(-${offsetY * 0.2}px)`}}
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6, type: "string" }}
      />
      <motion.img
        src={asset11}
        alt="blue-plus"
        className="w-[12px] lg:w-[18px] lg:h-[18px] object-contain absolute top-[-10px] lg:top-[57px] left-[74px] lg:left-[174px]"
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6, type: "string" }}
      />
      <motion.img
        src={asset9}
        alt="pink-circle"
        className="w-[12px] lg:w-[18px] lg:h-[18px] object-contain absolute top-[46px] lg:top-[155px] left-[-32px]"
        style={{transform: `translateY(-${offsetY * 0.1}px)`}}
        initial={{ opacity: 0, scale: 0.9, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6, type: "string" }}
      />
    </div>
  );
};

export default TeamAnimation;
