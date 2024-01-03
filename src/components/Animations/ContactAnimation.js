import React, { useEffect, useState } from "react";
import asset68 from "../../assets/asset68.svg";
import asset69 from "../../assets/asset69.svg";
import asset70 from "../../assets/asset70.svg";
import asset71 from "../../assets/asset71.svg";
import asset72 from "../../assets/asset72.svg";
import asset73 from "../../assets/asset73.svg";
import asset10 from "../../assets/asset 10.svg";
import asset13 from "../../assets/asset 13.svg";

const ContactAnimation = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full h-full relative">
      <img
        src={asset68}
        alt="contactillustration"
        className="absolute w-[44px] lg:w-[76px] lg:h-[60px] top-[86px] lg:top-[232px] lg:left-[2px] "
        style={{transform: `translateY(-${offsetY * 0.1}px) rotate(-23deg)`}}
      />
      <img
        src={asset69}
        alt="contactillustration"
        className="absolute w-[110px] lg:w-auto bottom-[102px] right-[28px] lg:bottom-[132px] lg:right-[166px] z-40"
        
      />
      <img
        src={asset70}
        alt="contactillustration"
        className="absolute w-[66px] lg:w-auto bottom-[96px] left-[60px] lg:bottom-[122px] lg:left-[116px]"
      />
      <img
        src={asset71}
        alt="contactillustration"
        className="absolute w-[112px] lg:w-auto top-[-18px]  left-[10px] lg:top-[55px] lg:left-[72px]"
        style={{transform: `translateY(-${offsetY * 0.1}px)`}}
      />
      <img
        src={asset72}
        alt="contactillustration"
        className="absolute w-[80px] top-[-20px] right-[60px] lg:w-auto lg:top-[26px] lg:right-[136px]"
        style={{transform: `translateY(+${offsetY * 0.2}px)`}}
      />
      <img
        src={asset73}
        alt="contactillustration"
        className="absolute w-[48px] lg:w-[88px] top-[80px] lg:top-[240px] right-[10px] lg:right-[82px] rotate-[30deg]"
      />
      <img
        src={asset10}
        alt="contactillustration"
        className="absolute top-[4px] lg:top-[55px] right-[20px] lg:right-[88px] w-4 h-4 "
        style={{transform: `translateY(-${offsetY * 0.1}px)`}}
      />
      <img
        src={asset13}
        alt="contactillustration"
        className="absolute w-4 lg:w-[22px] top-[48px] lg:top-[158px] right-[4px] lg:right-[49px]"
        style={{transform: `translateY(-${offsetY * 0.1}px)`}}
      />
      <img
        src={asset13}
        alt="contactillustration"
        className="absolute w-4 lg:w-[18px] bottom-[96px] left-[28px] lg:bottom-[146px] lg:left-[83px]"
      />
    </div>
  );
};

export default ContactAnimation;
