import React from "react";
import { team_members } from "../constants/constant";
import { motion } from "framer-motion";
import asset41 from "../assets/asset 41.svg";
import asset42 from "../assets/asset 42.svg";
import asset43 from "../assets/asset 43.svg";

const Team = () => {
  return (
    <div className="relative w-full xl:w-[1200px] m-auto py-[60px] px-[4%] xl:px-0 lg:py-[110px]">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {team_members.map((member, index) => {
          return (
            <motion.div
              className="py-2"
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
                src={member.imgUrl}
                alt={member.name + "img"}
                className="w-full h-[50vh] object-cover transform scale-[1] hover:scale-[0.9] custom-transition mb-5"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg md:text-xl xl:text-[22px] font-semibold text-black-800">
                    {member.name}
                  </p>
                  <p className="text-[#a0a0a0] text-lg">{member.role}</p>
                </div>
                <div className="flex gap-2">
                  <div className="p-2 rounded-full bg-black-400  w-8 h-8 flex justify-center items-center hover:cursor-pointer hover:bg-purple custom-transition">
                    <img src={asset41} width={30} alt="facebook" />
                  </div>
                  <div className="p-2 rounded-full bg-black-400 w-8 h-8 flex justify-center items-center hover:cursor-pointer hover:bg-purple custom-transition">
                    <img src={asset42} width={30} alt="twitter" />
                  </div>
                  <div className="p-2 rounded-full bg-black-400  w-8 h-8 flex justify-center items-center hover:cursor-pointer hover:bg-purple custom-transition">
                    <img src={asset43} width={30} alt="linkedin" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
