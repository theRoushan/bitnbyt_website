import React from "react";

const Hero = () => {
  return (
    <div className="hero w-full h-[100vh] bg-black-600 flex text-white overflow-hidden relative ">
      <div className="w-[1200px] m-auto p-auto">
        <div className="hero-left w-1/2">
          <h4 className="text-[13px] text-start bg-black-400 rounded-full py-2 px-[25px] inline-block font-semibold mb-[30px]">
            BitnByt - Bits of Byte Brilliance.
          </h4>
          <h1 className="text-[61px] font-bold leading-[67.2px] mb-[30px]">
            We are a digital marketing agency
          </h1>
          <p className="text-lg leading-[27px] mb-[30px]">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking value proposition.
          </p>
          <div>
            <form className="flex place-items-center gap-4" onSubmit={(e)=>  e.preventDefault()}>
              <input type="email" name="email" placeholder="Your email here" className="py-[14px] px-8 text-lg border rounded-full w-8/12 focus:outline-purple text-black "/>
              <button className="btn bg-yellow border-yellow text-black hover:text-white hover:bg-transparent">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
