import React from "react";
import assest30 from "../assets/asset 30.png";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { testimonials } from "../constants/constant";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="w-full min-h-screen flex relative">
      <img
        src={assest30}
        alt="background"
        className="absolute top-0 left-0 w-full h-full z-0 object-cover"
      />
      <div className="w-full xl:w-[1200px] px-[4%] xl:px-0 m-auto relative py-[60px] md:py-[100px] xl:py-[140px] z-10 flex flex-col place-items-center">
        <motion.h1
          className="text-[32px] md:text-[36px] xl:text-[40px] leading-[40px] xl:leading-[48px] mb-5 font-bold md:w-[60%] lg:w-4/12 text-center"
          initial={{ opacity: 0, y: "60px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, type: "string" }}
          viewport={{ once: true }}
        >
          What our awesome customers say
        </motion.h1>
        <motion.p
          className="info-text md:w-8/12 lg:w-6/12 text-center mb-12"
          initial={{ opacity: 0, y: "60px" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5, type: "string" }}
        >
          Our team has a successful track record of helping brands scale
          profitably based on high-performing strategies.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((item, index) => {
            return (
              <motion.div
                key={item.name}
                className="w-full bg-white rounded-[36px] px-5 py-10 flex flex-col place-items-center"
                initial={{ opacity: 0, y: "60px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.4,
                  type: "string",
                }}
                viewport={{ once: true }}
              >
                <img
                  src={item.imgUrl}
                  alt="client-profile"
                  className="w-[90px] h-[90px] object-cover rounded-full mb-5"
                />
                <h3 className="text-[20px] font-[500]">{item.name}</h3>
                <p className="info-text mb-5">{item.role}</p>
                <p className="text-[20px] mb-5">{'"' + item.comment + '"'}</p>
                <p className="text-yellow text-[30px]">
                  <StarRoundedIcon fontSize="inherit" />
                  <StarRoundedIcon fontSize="inherit" />
                  <StarRoundedIcon fontSize="inherit" />
                  <StarRoundedIcon fontSize="inherit" />
                  <StarRoundedIcon fontSize="inherit" />
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
