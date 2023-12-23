import React from "react";
import { team_members } from "../constants/constant";
import asset40 from "../assets/asset 40.svg";
import asset41 from "../assets/asset 41.svg";
import asset42 from "../assets/asset 42.svg";
import asset43 from "../assets/asset 43.svg";

const Team = () => {
  return (
    <div className="relative w-[1200px] m-auto py-[110px]">
      <div className="flex flex-wrap justify-between items-start">
        {team_members.map((member) => {
          return (
            <div className="py-6">
              <img
                src={member.imgUrl}
                alt={member.name + "img"}
                width={370}
                className="transform scale-[1] hover:scale-[0.9] custom-transition mb-5"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[22px] font-semibold text-black-800">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
