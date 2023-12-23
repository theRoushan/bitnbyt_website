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
    <div>
      <img
        src={asset75}
        alt="teamillustration"
        className="w-[500px] h-[290px] object-contain absolute top-[105px] left-[18px]"
        style={{transform: `translateY(+${offsetY * 0.15}px)`}}
      />
      <img
        src={asset74}
        alt="teamillustration"
        className="w-[40px] h-[20px] object-contain absolute top-[173px] left-[194px]"
      />
      <img
        src={asset78}
        alt="curves"
        className="w-[30px] h-[25px] object-contain absolute top-[193px] left-[83px]"
      />
      <img
        src={asset76}
        alt="curves"
        className=" w-[40px] h-[20px] object-contain absolute bottom-[182px] left-[63px] "
      />
      <img
        src={asset78}
        alt="curves"
        className="object-contain absolute top-[198px] right-[119px]"
      />
      <img
        src={asset77}
        alt="curves"
        className="w-[40px] h-[20px] object-contain absolute bottom-[182px] right-[121px]"
      />
      <img
        src={asset12}
        alt="green-plus"
        className="w-[18px] h-[18px] object-contain absolute top-[230px] right-[64px]"
        style={{transform: `translateY(-${offsetY * 0.1}px)`}}
      />
      <img
        src={asset57}
        alt="pink-plus"
        className="w-[18px] h-[18px] object-contain absolute bottom-[154px] left-[-16px]"
      />
      <img
        src={asset10}
        alt="orange-circle"
        className="w-[18px] h-[18px] object-contain absolute bottom-[163px] right-[42px]"
      />
      <img
        src={asset13}
        alt="star"
        className="w-[18px] h-[18px] object-contain absolute bottom-[104px] right-[240px]"
        style={{transform: `translateY(+${offsetY * 0.1}px)`}}
      />
      <img
        src={asset13}
        alt="star"
        className="w-[25px] h-[25px] absolute top-[56px] right-[69px]"
        style={{transform: `translateY(-${offsetY * 0.2}px)`}}
      />
      <img
        src={asset11}
        alt="blue-plus"
        className="w-[18px] h-[18px] object-contain absolute top-[57px] left-[174px]"
      />
      <img
        src={asset9}
        alt="pink-circle"
        className="w-[18px] h-[18px] object-contain absolute top-[155px] left-[-32px]"
        style={{transform: `translateY(-${offsetY * 0.1}px)`}}
      />
    </div>
  );
};

export default TeamAnimation;
