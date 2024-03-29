import React from "react";
import asset37 from "../assets/asset 37.svg";
import asset38 from "../assets/asset 38.svg";
import asset39 from "../assets/asset 39.svg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="w-full min-h-screen flex relative bg-black-800 text-white"
      initial={{ opacity: 0, y: "60px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8, type: "string" }}
      viewport={{ once: true }}
    >
      <div className="w-full xl:w-[1200px] px-[4%] xl:px-0 m-auto py-[60px] md:py-[100px]  xl:py-[140px] flex flex-wrap lg:flex-nowrap justify-between relative">
        <div className="contact-left lg:w-6/12">
          <h1 className="text-[38px] md:text-[46px] lg:text-[50px] leading-[50px] lg:leading-[60px] mb-5 font-bold">
            Ready to get started? Create an account today
          </h1>
          <p className="text-base lg:text-[20px] text-yellow mb-5 font-semibold">
            Need a successful project?
          </p>
          <p className="text-[18px] lg:text-[20px] lg:w-11/12 pb-10">
            Proactive domination. At the end of the day, going for normal that
            has evolved from generation.
          </p>
          <div className="flex flex-col gap-7">
            <div className="flex place-items-center gap-5">
              <div className="bg-purple w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] rounded-full flex justify-center items-center">
                <img src={asset37} alt="email-icon" width={20} />
              </div>
              <div>
                <h3 className="text-[18px] md:text-[20px] font-bold">Email</h3>
                <p className="text-[18px] md:text-[20px] text-gray-light">
                  bitnbyt@gmail.com
                </p>
              </div>
            </div>
            <div className=" flex place-items-center gap-5">
              <div className="bg-purple w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] rounded-full flex justify-center items-center">
                <img src={asset38} alt="phone-icon" width={20} />
              </div>
              <div>
                <h3 className="text-[18px] md:text-[20px] font-bold">
                  Phone support
                </h3>
                <p className="text-[18px] md:text-[20px] text-gray-light">
                  +91 3448835234
                </p>
              </div>
            </div>
            <div className=" flex place-items-center gap-5">
              <div className="bg-purple w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] rounded-full flex justify-center items-center">
                <img src={asset39} alt="location-icon" width={20} />
              </div>
              <div>
                <h3 className="text-[18px] md:text-[20px] font-bold">
                  Address
                </h3>
                <p className="text-[18px] md:text-[20px] text-gray-light">
                  Blue orchid Tower, Madhepura, Bihar
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right w-full mt-12 lg:mt-0 lg:w-5/12 rounded-3xl p-4 lg:p-10 xl:p-16 overflow-hidden relative bg-opacity-60 gradient">
          <form className="flex flex-col w-full gap-6 relative">
            <input
              type="text"
              name="name"
              placeholder="your name*"
              className="text-white outline-none text-base lg:text-lg rounded-[30px] w-full bg-black-800 px-6 placeholder-white py-4 lg:py-5 font-semibold "
            />
            <input
              type="email"
              name="email"
              placeholder="your email*"
              className="text-white text-base lg:text-lg outline-none rounded-[30px] w-full bg-black-800 px-6 placeholder-white py-4 lg:py-5 font-semibold"
            />
            <textarea
              rows={5}
              name="details"
              placeholder="Write Project Details*"
              className="text-white text-base lg:text-lg outline-none rounded-[30px] w-full bg-black-800 px-6 placeholder-white py-4 lg:py-5 font-semibold"
            />
            <button className="py-4 lg:py-5 bg-white rounded-[30px] text-black text-base lg:text-lg font-semibold hover:bg-white-smoke">
              Send message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
