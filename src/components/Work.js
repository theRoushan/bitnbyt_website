import React from "react";
import { work } from "../constants/constant";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Work = (props) => {
  return (
    <div className="w-full xl:w-[1200px] px-[4%] lg:px-[1%] xl:px-0 m-auto relative py-[60px] md:py-[100px] xl:py-[140px] ">
      {props.heading && (
        <motion.h1
          className="text-[32px] md:text-[36px] xl:text-[40px] font-bold xl:leading-[48px] md:text-center mb-[10px]"
          initial={{ opacity: 0, y: "60px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, type: "string" }}
          viewport={{ once: true }}
        >
          {props.heading}
        </motion.h1>
      )}
      {props.desc && (
        <motion.p
          className="info-text  md:text-center mb-[40px]"
          initial={{ opacity: 0, y: "60px" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5, type: "string" }}
        >
          {props.desc}
        </motion.p>
      )}
      <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-10 lg:px-[30px] ">
        {work.map((item, index) => {
          return (
            <motion.div
              key={item.imgUrl}
              initial={{ opacity: 0, y: "60px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + index * 0.1,
                duration: 0.4,
                type: "string",
              }}
              viewport={{ once: true }}
            >
              <Link to="/projectdetails">
                <div className="w-full h-[430px] relative group mb-6">
                  <img
                    src={item.imgUrl}
                    alt="work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full p-[50px]">
                    <div className="bg-white w-full h-full flex justify-center items-center bg-opacity-25 opacity-0 group-hover:opacity-100 transition duration-700">
                      <div className="p-[24px] rounded-full text-white border-2 border-white">
                        <AddRoundedIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <h3 className="text-lg md:text-[20px] xl:text-[22px] leading-[27px] mb-1 font-semibold">
                {item.title}
              </h3>
              <p className="info-text">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
