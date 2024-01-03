import React from "react";
import img24 from "../assets/asset 24.jpeg";
// import img25 from "../assets/asset 25.svg";
import img26 from "../assets/asset 26.svg";

const About = () => {
  return (
    <div className="bg-black-800 text-white">
      <div className="w-full lg:w-[1200px] h-full m-auto px-[7%] lg:px-0 py-[60px] lg:py-32 flex flex-wrap lg:flex-nowrap justify-between items-center gap-[60px] relative">
        <div className="about-left w-full relative">
          <h1 className="text-[32px] lg:text-[40px] font-bold lg:leading-[48px] mb-[30px]">
            We’re Creative Agency From Los Angeles
          </h1>
          <div className="w-full h-[36vh] lg:w-[570px] lg:h-[500px] rounded-3xl overflow-hidden">
            <img src={img24} alt="img" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="about-right">
          <h3 className="text-xl lg:text-[25px] font-semibold text-yellow lg:leading-[30px] lg:w-11/12 mb-10">
            Professional Design Agency to provide solutions
          </h3>
          <p className="text-base lg:text-[18px] mb-[25px]">
            Welcome to our Professional Design Agency, where we specialize in
            providing innovative solutions for your brand.
          </p>
          <p className="text-base lg:text-[18px] mb-[25px]">
            Our team of skilled designers and creatives are passionate about
            bringing your vision to life. Whether you need a stunning website,
            eye-catching branding, or captivating marketing materials, we have
            the expertise to deliver outstanding results.
          </p>
          <p className="text-base lg:text-[18px] mb-[25px]">
            From concept development to final execution, we collaborate closely
            with our clients to ensure every project exceeds expectations. Trust
            us to elevate your brand and make a lasting impression with our
            exceptional design solutions.
          </p>
          <div className="w-full flex flex-wrap lg:flex-nowrap place-items-start gap-[10px]">
            <div className="bg-black-500 p-[30px] rounded-3xl text-center">
              <p className="text-[30px] lg:text-[60px] text-yellow font-bold leading-[34px] lg:leading-[46px]">
                345+ <br/><span className="text-[26px] lg:text-[38px] text-white">Awards</span>
              </p>
            </div>
            <div>
              <div className="flex gap-3 mb-5 ">
                <img src={img26} alt="icon" />
                <p className="text-[18px] lg:text-[20px] leading-6">Digital Creative Agency</p>
              </div>
              <div className="flex gap-3 mb-5 ">
                <img src={img26} alt="icon" />
                <p className="text-[18px] lg:text-[20px] leading-6">Professional Problem Solutions</p>
              </div>
              <div className="flex gap-3 mb-5 ">
                <img src={img26} alt="icon" />
                <p className="text-[18px] lg:text-[20px] leading-6">Web Design & Development</p>
              </div>
              <button className="btn border-white hover:bg-yellow hover:border-yellow hover:text-black">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
