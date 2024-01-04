import React from "react";
import Home from "../Home";
import asset45 from "../../assets/asset45.jpg";
import asset44 from "../../assets/asset44.jpg";
import asset46 from "../../assets/asset46.svg";
import asset47 from "../../assets/asset47.svg";
import asset48 from "../../assets/asset48.svg";
import asset55 from "../../assets/asset55.svg";
import asset49 from "../../assets/asset49.png";
import asset56 from "../../assets/asset56.svg";
import asset54 from "../../assets/asset54.svg";
import Contact from "../Contact";
import Footer from "../Footer";
import AboutAnimation from "../Animations/AboutAnimation";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div>
      <Home
        tag="About our Agento Agency"
        heading="We do great things together"
        animation={<AboutAnimation />}
      />
      <div className="w-full xl:w-[1200px] py-[60px] md:py-[100px] px-[4%] xl:px-0 relative m-auto xl:py-[110px] flex flex-wrap xl:flex-nowrap justify-between items-center gap-10 border-b border-[#d2d2d2]">
        <div className="w-full xl:w-[540px] relative">
          <div className="w-full h-[60vw] lg:h-[465px] overflow-hidden relative rounded-[30px] mb-10">
            <img src={asset45} alt="asset45" className="w-full h-full object-cover" />
          </div>
          <p className="text-[22px] md:text-[25px] pb-[10px] font-bold">Mission</p>
          <p className="text-base md:text-lg pb-[25px] text-black-800 ">
            At Agento, our mission is to empower businesses with cutting-edge
            digital solutions that drive growth and success. We are dedicated to
            delivering exceptional websites, streamlined e-commerce platforms,
            and innovative online experiences..
          </p>
          <p className="text-base md:text-lg text-black-800">
            Join us on this transformative journey and unlock the full potential
            of your online presence with Agento.
          </p>
        </div>
        <div>
          <h1 className="text-[32px] md:text-[36px] xl:text-[40px] leading-[40px] lg:leading-[48px] mb-5 font-bold pb-5">
            We help to create strategies, design & development.
          </h1>
          <div className="w-full h-[30vh] xl:w-[620px] lg:h-[350px] overflow-hidden relative rounded-[30px] mb-10">
            <img src={asset44} alt="asset44" className="w-full h-full object-cover" />
          </div>
          <p className="text-[22px] md:text-[25px] pb-[10px] font-bold">Value</p>
          <p className="text-base md:text-lg text-black-800 pb-5">
            We are committed to delivering value-driven solutions that empower
            businesses. Our core values of innovation, quality, and customer
            satisfaction drive everything we do.
          </p>
          <div className="flex gap-3">
            <button className="btn border-black text-black hover:text-white hover:bg-black">
              <Link to="/contact">Contact</Link>
            </button>
            <button className="btn bg-yellow border-yellow text-black hover:bg-transparent">
              <Link to="/portfolio">See our latest work</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[1200px] relative m-auto pt-[60px] md:pt-[100px] px-[4%] xl:px-0 xl:py-[110px]">
        <h1 className="text-[32px] md:text-[36px] lg:text-[40px] leading-[40px] lg:leading-[48px] mb-5 font-bold text-center">
          Superior design & concept work
        </h1>
        <p className="info-text text-center mb-10">
          Corporate strategy collaborative value proposition.
        </p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-0 items-center xl:pb-[110px]">
          <div className="flex gap-6 w-[400px]">
            <div className="w-[70px] h-[70px] overflow-hidden">
              <img src={asset46} alt="icon" className="object-contain" />
            </div>
            <div>
              <p className="text-lg lg:text-[22px] text-black-800 mb-5 font-semibold">
                Design
              </p>
              <div className="flex gap-2 items-center mb-[10px]">
                <img src={asset55} alt="arrow-icon" width={24} height={24} />
                <p className="text-[20px] text-black-800">Video Production</p>
              </div>
              <div className="flex gap-2 items-center mb-[10px]">
                <img src={asset55} alt="arrow-icon" width={24} height={24} />
                <p className="text-[20px] text-black-800">Graphic Design</p>
              </div>
              <div className="flex gap-2 items-center mb-[10px]">
                <img src={asset55} alt="arrow-icon" width={24} height={24} />
                <p className="text-[20px] text-black-800">Market Analysis</p>
              </div>
              <div className="flex gap-2 items-center mb-[10px]">
                <img src={asset55} alt="arrow-icon" width={24} height={24} />
                <p className="text-[20px] text-black-800">UI/UX Design</p>
              </div>
              <div className="flex gap-2 items-center mb-[10px]">
                <img src={asset55} alt="arrow-icon" width={24} height={24} />
                <p className="text-[20px] text-black-800">Compaign Strategy</p>
              </div>
            </div>
          </div>
          <div className="flex gap-6 w-[400px] ">
            <div className="w-[70px] h-[70px] overflow-hidden">
              <img src={asset47} alt="icon" className="object-contain" />
            </div>
            <div>
              <p className="text-lg lg:text-[22px] text-black-800 mb-5 font-semibold">
                Strategy
              </p>
              <div className="flex gap-2 items-center mb-[10px]">
                <img src={asset55} alt="arrow-icon" width={24} height={24} />
                <p className="text-[20px] text-black-800">Video Production</p>
              </div>
              <div className="flex gap-2 items-center mb-[10px]">
                <img src={asset55} alt="arrow-icon" width={24} height={24} />
                <p className="text-[20px] text-black-800">Graphic Design</p>
              </div>
              <div className="flex gap-2 items-center mb-[10px]">
                <img src={asset55} alt="arrow-icon" width={24} height={24} />
                <p className="text-[20px] text-black-800">Market Analysis</p>
              </div>
              <div className="flex gap-2 items-center mb-[10px]">
                <img src={asset55} alt="arrow-icon" width={24} height={24} />
                <p className="text-[20px] text-black-800">UI/UX Design</p>
              </div>
              <div className="flex gap-2 items-center mb-[10px]">
                <img src={asset55} alt="arrow-icon" width={24} height={24} />
                <p className="text-[20px] text-black-800">Compaign Strategy</p>
              </div>
            </div>
          </div>
          <div className="flex gap-6 w-[400px] ">
            <div className="w-[70px] h-[70px] overflow-hidden">
              <img src={asset48} alt="icon" className="object-contain" />
            </div>
            <div>
              <p className="text-lg lg:text-[22px] text-black-800 mb-5 font-semibold">
                Development
              </p>
              <div className="flex gap-2 items-center mb-[10px]">
                <img src={asset55} alt="arrow-icon" width={24} height={24} />
                <p className="text-[20px] text-black-800">Video Production</p>
              </div>
              <div className="flex gap-2 items-center mb-[10px]">
                <img src={asset55} alt="arrow-icon" width={24} height={24} />
                <p className="text-[20px] text-black-800">Graphic Design</p>
              </div>
              <div className="flex gap-2 items-center mb-[10px]">
                <img src={asset55} alt="arrow-icon" width={24} height={24} />
                <p className="text-[20px] text-black-800">Market Analysis</p>
              </div>
              <div className="flex gap-2 items-center mb-[10px]">
                <img src={asset55} alt="arrow-icon" width={24} height={24} />
                <p className="text-[20px] text-black-800">UI/UX Design</p>
              </div>
              <div className="flex gap-2 items-center mb-[10px]">
                <img src={asset55} alt="arrow-icon" width={24} height={24} />
                <p className="text-[20px] text-black-800">Compaign Strategy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-content my-[50px]  md:my-[100px]  lg:h-[404px] relative  rounded-[30px] overflow-hidden">
          <img
            src={asset49}
            alt="bg-graident"
            className="w-full h-full absolute top-0 left-0 z-0 object-cover"
          />
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 p-[30px] md:p-[50px] xl:px-[80px] xl:py-[90px]">
            <div className="bg-white rounded-3xl p-5 md:p-10 flex flex-wrap xl:flex-nowrap gap-7">
              <div className=" bg-yellow bg-opacity-30 rounded-full h-[80px] w-[80px] flex items-center justify-center">
                <img src={asset56} alt="icon" />
              </div>
              <div>
                <p className="text-lg md:text-[20px] lg:text-[22px] text-black-800 mb-2 font-semibold">
                  Experienced team
                </p>
                <p className="info-text">
                  Our experienced team at Agento brings a wealth of expertise
                  and industry knowledge to each and every project.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-5 md:p-10 flex flex-wrap xl:flex-nowrap gap-7">
              <div className=" bg-blue bg-opacity-30 rounded-full h-[80px] w-[80px] flex items-center justify-center">
                <img src={asset54} alt="icon" />
              </div>
              <div>
                <p className="text-lg md:text-[20px] lg:text-[22px] text-black-800 mb-2 font-semibold">
                  Best result guarantee
                </p>
                <p className="info-text ">
                  We are dedicated to delivering the best results for our
                  clients. we strive to exceed expectation and ensure client
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutSection;
