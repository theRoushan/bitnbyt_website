import React from "react";
import { services } from "../constants/constant";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="relative flex flex-wrap xl:flex-nowrap justify-start gap-[60px] xl:gap-[80px] w-full xl:w-[1200px] m-auto pt-[50px] md:pt-[100px] xl:pt-[155px] px-[4%] xl:px-0">
      <div className="services-left relative w-full xl:w-4/12">
        <motion.h1
          className="text-[32px] md:text-[36px] xl:text-[40px] md:leading-[48px] mb-5 font-bold"
          initial={{ opacity: 0, y: "60px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, type: "string" }}
          viewport={{ once: true }}
        >
          Services we can help you with
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: "60px" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5, type: "string" }}
        >
          Corporate strategy collaborative value proposition.
        </motion.p>
      </div>
      <div className="w-full xl:w-8/12 relative grid md:grid-cols-2 gap-[60px]">
        {services.map((item, index) => {
          return (
            <motion.div
              key={item.imgUrl}
              initial={{ opacity: 0, y: "60px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4, type: "string" }}
              viewport={{ once: true }}
            >
              <div className="w-[60px] h-[60px] border border-black rounded-full flex items-center justify-center mb-[10px]">
                <img src={item.imgUrl} className="w-[30px]" alt="img" />
              </div>
              <h2 className="text-[24px] leading-[36px] font-bold text-left mb-[10px]">
                {item.title}
              </h2>
              <p className="info-text">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
