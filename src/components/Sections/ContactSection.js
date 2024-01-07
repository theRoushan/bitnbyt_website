import React from "react";
import Home from "../Home";
import asset37 from "../../assets/asset 37.svg";
import asset38 from "../../assets/asset 38.svg";
import asset39 from "../../assets/asset 39.svg";
import Footer from "../Footer";
import ContactAnimation from "../Animations/ContactAnimation";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <div>
      <Home
        tag="Team Members"
        heading="Contact Us"
        animation={<ContactAnimation />}
      />
      <div className="w-full min-h-screen flex relative text-black-800 border-b border-[#d2d2d2]">
        <div className="w-full xl:w-[1200px] px-[4%] xl:px-0 m-auto py-[60px] md:py-[100px] xl:py-[140px] flex flex-wrap lg:flex-nowrap justify-between items-center relative">
          <motion.div
            className="contact-left lg:w-5/12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, type: "string" }}
          >
            <h4 className="contact tag text-white">Team Members</h4>
            <h1 className="text-[35px] md:text-[46px] lg:text-[61px] leading-[30px] md:leading-[51px] lg:leading-[67px] mb-5 font-bold">
              Let's get in touch
            </h1>
            <p className="text-lg md:text-[20px] lg:w-11/12 pb-10">
              Collaborative thinking to further the proposition. Organically
              grow the holistic world view of disruptive innovation via and
              empowerment.
            </p>
            <div className="flex flex-col gap-7">
              <div className="flex place-items-center gap-5">
                <div className="bg-purple w-[70px] h-[70px] md:w-[80px] md:h-[80px]  rounded-full flex justify-center items-center">
                  <img src={asset37} alt="email-icon" width={20} />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-bold">
                    Email
                  </h3>
                  <p className="text-[18px] md:text-[20px]">
                    bitnbyt@gmail.com
                  </p>
                </div>
              </div>
              <div className=" flex place-items-center gap-5">
                <div className="bg-purple w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-full flex justify-center items-center">
                  <img src={asset38} alt="phone-icon" width={20} />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-bold">
                    Phone support
                  </h3>
                  <p className="text-[18px] md:text-[20px]">+91 3448835234</p>
                </div>
              </div>
              <div className=" flex place-items-center gap-5">
                <div className="bg-purple w-[70px] h-[70px] md:w-[80px] md:h-[80px]  rounded-full flex justify-center items-center">
                  <img src={asset39} alt="location-icon" width={20} />
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-bold">
                    Address
                  </h3>
                  <p className="text-[18px] md:text-[20px]">
                    Blue orchid Tower, Madhepura, Bihar
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="contact-right w-full mt-10 lg:mt-0 lg:w-6/12 rounded-3xl p-6 lg:p-16 h-max overflow-hidden relative bg-opacity-90 bg-purple"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4, type: "string" }}>
            <form className="flex flex-col w-full gap-6 relative">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className=" outline-none text-base rounded-xl w-full placeholder-black bg-white px-6 py-4 lg:py-5 "
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className=" text-base outline-none rounded-xl w-full placeholder-black bg-white px-6 py-4 lg:py-5 "
              />
              <textarea
                rows={7}
                name="details"
                placeholder="Message"
                className=" text-base outline-none rounded-xl w-full placeholder-black bg-white px-6 py-4 lg:py-5 "
              />
              <button className="py-4 lg:py-5 bg-yellow rounded-xl text-black text-base font-semibold hover:bg-opacity-90">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactSection;
