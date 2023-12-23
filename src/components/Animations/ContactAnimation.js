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
        className="absolute w-[76px] h-[60px] top-[232px] left-[2px] "
        style={{transform: `translateY(-${offsetY * 0.2}px) rotate(-23deg)`}}
      />
      <img
        src={asset69}
        alt="contactillustration"
        className="absolute bottom-[132px] right-[166px]"
      />
      <img
        src={asset70}
        alt="contactillustration"
        className="absolute bottom-[122px] left-[116px]"
      />
      <img
        src={asset71}
        alt="contactillustration"
        className="absolute top-[55px] left-[72px]"
      />
      <img
        src={asset72}
        alt="contactillustration"
        className="absolute top-[26px] right-[136px]"
      />
      <img
        src={asset73}
        alt="contactillustration"
        className="absolute w-[88px] top-[240px] right-[82px] rotate-[30deg]"
      />
      <img
        src={asset10}
        alt="contactillustration"
        className="absolute top-[55px] right-[88px] w-4 h-4 "
      />
      <img
        src={asset13}
        alt="contactillustration"
        className="absolute w-[22px] top-[158px] right-[49px]"
      />
      <img
        src={asset13}
        alt="contactillustration"
        className="absolute w-[18px] bottom-[146px] left-[83px]"
      />
    </div>
  );
};

export default ContactAnimation;
