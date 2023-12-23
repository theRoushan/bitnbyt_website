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
    <div className="hero w-full pb-[100px] bg-black-600 flex text-white overflow-hidden relative ">
      <div className="w-[1200px] h-[750px] m-auto flex relative">
        <div className="h-full hero-left w-1/2 py-[175px]">
          <h4 className="tag">BitnByt - Bits of Byte Brilliance.</h4>
          <h1 className="heading">We are a digital marketing agency</h1>
          <p className="text-lg leading-[27px] mb-[30px]">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking value proposition.
          </p>
          <div>
            <form
              className="flex place-items-center gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                name="email"
                placeholder="Your email here"
                className="py-[14px] px-8 text-lg border rounded-full w-8/12 focus:outline-purple text-black "
              />
              <button className="btn bg-yellow border-yellow text-black hover:text-white hover:bg-transparent">
                Contact Us
              </button>
            </form>
          </div>
        </div>
        <div className="hero-right w-1/2 relative">
          <img
            src={asset1}
            alt="green-circle"
            className="absolute bottom-[107px] left-[-589px] w-[18px] h-[18px] object-contain"
            style={{ transform: `translateY(+${offsetY * 0.1}px)` }}
          />
          <img
            src={asset2}
            alt="orange-plus"
            className="absolute top-[233px] left-[-669px] w-[18px] h-[18px] object-contain"
            style={{ transform: `translateY(+${offsetY * 0.2}px)` }}
          />
          <img
            src={asset3}
            alt="graph"
            className="absolute left-[110px] top-[204px] w-[380px] h-[330px] object-contain"
            style={{ transform: `translateY(+${offsetY * 0.1}px)` }}
          />
          <img
            src={asset4}
            alt="speaker"
            className="absolute left-[45px] top-[44px] w-[180px] h-[130px] object-contain "
            style={{ transform: `translateY(+${offsetY * 0.2}px)` }}
          />
          <img
            src={asset5}
            alt="likes"
            className="absolute left-[35px] top-[263px] w-[100px] h-[90px] object-contain"
          />
          <img
            src={asset6}
            alt="graph"
            className="absolute bottom-[167px] left-[40px] w-[90px] object-contain"
            style={{ transform: `translateY(-${offsetY * 0.15}px)` }}
          />
          <img
            src={asset7}
            alt="graph"
            className="absolute top-[128px] right-[44px] w-[200px] h-[130px] object-contain"
            style={{ transform: `translateY(-${offsetY * 0.05}px)` }}
          />
          <img
            src={asset8}
            alt="video"
            className="absolute bottom-[118px] right-[19px] w-[210px] h-[175px] object-contain"
            style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
          />
          <img
            src={asset9}
            alt="pink-circle"
            className="absolute top-[175px] left-[-20px] w-[18px] h-[18px] object-contain"
            style={{ transform: `translateY(+${offsetY * 0.1}px)` }}
          />
          <img
            src={asset10}
            alt="orange-circle"
            className="absolute bottom-[345px] right-0 w-[18px] h-[18px] object-contain"
            style={{ transform: `translateY(+${offsetY * 0.15}px)` }}
          />
          <img
            src={asset11}
            alt="blue-plus"
            className="absolute left-[255px] top-[66px] w-[18px] h-[18px] object-contain"
          />
          <img
            src={asset12}
            alt="green-plus"
            className="absolute top-[299px] right-[59px] w-[18px] h-[18px] object-contain"
            style={{ transform: `translateY(+${offsetY * 0.15}px)` }}
          />
          <img
            src={asset13}
            alt="star"
            className="absolute top-[82px] right-[0px]"
            style={{ transform: `translateY(+${offsetY * 0.1}px)` }}
          />
          <img
            src={asset13}
            alt="star"
            className="absolute bottom-[117px] left-[210px]"
            style={{ transform: `translateY(+${offsetY * 0.2}px)` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
