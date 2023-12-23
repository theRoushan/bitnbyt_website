import React, { useEffect, useState } from "react";
import asset10 from "../../assets/asset 10.svg";
import asset13 from "../../assets/asset 13.svg";
import asset63 from "../../assets/asset63.svg";
import asset64 from "../../assets/asset64.svg";
import asset65 from "../../assets/asset65.svg";
import asset66 from "../../assets/asset66.svg";
import asset67 from "../../assets/asset67.svg";

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
      <img
        src={asset63}
        alt="portfolioillustration"
        className="absolute z-10 w-[240px] h-[230px] top-[163px] left-[24px]"
        style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
      />
      <img
        src={asset64}
        alt="portfolioillustration"
        className="absolute z-10 w-[240px] h-[230px] bottom-[90px] left-[340px] "
        style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
      />
      <img
        src={asset65}
        alt="portfolioillustration"
        className="absolute z-0 w-[240px] h-[230px] top-[67px]"
        style={{ transform: `translateY(+${offsetY * 0.1}px)` }}
      />
      <img
        src={asset66}
        alt="portfolioillustration"
        className="absolute z-0 w-[75px] h-[75px] top-[108px] right-[72px]"
        style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
      />
      <img
        src={asset67}
        alt="portfolioillustration"
        className="absolute z-0 top-[105px] left-[74px]"
        style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
      />
      <img
        src={asset10}
        alt="portfolioillustration"
        className="absolute w-[11px] h-[11px] top-[182px] right-[24px]"
        style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
      />
      <img
        src={asset13}
        alt="portfolioillustration"
        className="absolute w-[18px] h-[18px] bottom-[114px] z-40 left-[172px]"
        style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
      />
      <img
        src={asset13}
        alt="portfolioillustration"
        className="absolute z-0 w-[20px] h-[20px] top-[56px] left-[76px]"
        style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
      />
    </div>
  );
};

export default PortfolioAnimation;
