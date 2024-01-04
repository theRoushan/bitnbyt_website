import React from "react";
import img24 from "../assets/asset 24.jpeg";
// import img25 from "../assets/asset 25.svg";
import img26 from "../assets/asset 26.svg";

const About = () => {
  return (
    <div className="bg-black-800 text-white">
      <div className="w-full xl:w-[1200px] h-full m-auto px-[4%] xl:px-0 py-[60px] md:py-[100px] xl:py-32 flex flex-wrap x;xl:flex-nowrap justify-between items-center gap-[60px] relative">
        <div className="about-left w-full relative">
          <h1 className="text-[32px] md:text-[36px] xl:text-[40px] font-bold xl:leading-[48px] mb-[30px]">
            We’re Creative Agency From Los Angeles
          </h1>
          <div className="w-full h-[36vh] md:h-[56vh] xl:w-[570px] xl:h-[500px] rounded-3xl overflow-hidden">
            <img src={img24} alt="img" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="about-right">
          <h3 className="text-xl md:text-[22px] xl:text-[25px] font-semibold text-yellow xl:leading-[30px] xl:w-11/12 mb-10">
            Professional Design Agency to provide solutions
          </h3>
          <p className="text-base md:text-[18px] mb-[25px]">
            Welcome to our Professional Design Agency, where we specialize in
            providing innovative solutions for your brand.
          </p>
          <p className="text-base md:text-[18px] mb-[25px]">
            Our team of skilled designers and creatives are passionate about
            bringing your vision to life. Whether you need a stunning website,
            eye-catching branding, or captivating marketing materials, we have
            the expertise to deliver outstanding results.
          </p>
          <p className="text-base md:text-[18px] mb-[25px]">
            From concept development to final execution, we collaborate closely
            with our clients to ensure every project exceeds expectations. Trust
            us to elevate your brand and make a lasting impression with our
            exceptional design solutions.
          </p>
          <div className="w-full flex flex-wrap place-items-start gap-[10px]">
            <div className="bg-black-500 p-[30px] rounded-3xl text-center">
              <p className="text-[30px] md:text-[60px] text-yellow font-bold leading-[34px] md:leading-[46px]">
                345+ <br/><span className="text-[26px] md:text-[38px] text-white">Awards</span>
              </p>
            </div>
            <div>
              <div className="flex gap-3 mb-5 ">
                <img src={img26} alt="icon" />
                <p className="text-[18px] md:text-[20px] leading-6">Digital Creative Agency</p>
              </div>
              <div className="flex gap-3 mb-5 ">
                <img src={img26} alt="icon" />
                <p className="text-[18px] md:text-[20px] leading-6">Professional Problem Solutions</p>
              </div>
              <div className="flex gap-3 mb-5 ">
                <img src={img26} alt="icon" />
                <p className="text-[18px] md:text-[20px] leading-6">Web Design & Development</p>
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
