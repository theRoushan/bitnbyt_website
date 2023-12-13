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

const AboutAnimation = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(document.documentElement.scrollTop);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <>
      <div className="w-full h-full relative flex justify-center items-center">
        <img src={asset4} alt="speaker" className="transform scale-x-[-1] w-[90px] h-[70px] absolute top-[17px] left-[230px]" style={{ transform: `scaleX(-1) translateY(-${offsetY * 0.25}px)` }}/>
        <img src={asset9} alt="pinkcircle" className="absolute top-[96px] left-[52px] z-30" style={{ transform: `translateY(+${offsetY * 0.15}px)` }}/>
        <img src={asset10} alt="orangecircle" className="absolute bottom-[179px] right-[68px]"/>
        <img src={asset13} alt="star" className="absolute top-[76px] right-[72px] w-[21px] h-[21px] z-40" style={{ transform: `translateY(+${offsetY * 0.2}px)` }}/>
        <img src={asset13} alt="star" className="absolute bottom-[100px] w-4 h-4 right-[208px]"/>
        <img src={asset12} alt="greenplussign" className="absolute w-[18px] h-[18px] top-[221px] right-[86px]" style={{ transform: `translateY(+${offsetY * 0.2}px)` }}/>
        <img src={asset11} alt="blueplussign" className="absolute top-[38px] left-[166px]"/>
        <img src={asset57} alt="pinkplussign" className="absolute w-[18px] h-[18px] top-[312px] left-[86px]"/>
        <img src={asset58} alt="mobileillustration" className="absolute top-[52px] left-[300px] z-0" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}/>
        <img src={asset59} alt="boy" className="absolute top-[74px] left-[121px] w-[150px]" style={{ transform: `translateY(-${offsetY * 0.15}px)` }}/>
        <img src={asset60} alt="greentextbox" className="absolute bottom-[145px] right-[232px] z-20" style={{ transform: `translateY(-${offsetY * 0.25}px)` }}/>
        <img src={asset61} alt="balcktextbox" className="absolute top-[214px] left-[54px] w-[110px] h-[50px]" style={{ transform: `translateY(-${offsetY * 0.08}px)` }}/>
        <img src={asset62} alt="whitetextbox" className="absolute top-[136px] left-[12px] w-[110px] h-[50px]" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}/>
      </div>
    </>
  );
};

export default AboutAnimation;
