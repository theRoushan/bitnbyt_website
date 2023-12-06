import React from "react";
import { work } from "../constants/constant";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const Work = (props) => {
  return (
    <div className="w-[1200px] m-auto relative py-[140px] ">
      {props.heading && (
        <h1 className="text-[40px] font-bold leading-[48px] text-center mb-[10px]">
          {props.heading}
        </h1>
      )}
      {props.desc && (
        <p className="info-text text-center mb-[40px]">
          {props.desc}
        </p>
      )}
      <div className="w-full grid grid-cols-3 gap-10 px-[30px] ">
        {work.map((item) => {
          return (
            <div key={item.imgUrl}>
              <div className="w-full h-[430px] relative group mb-6">
                <img
                  src={item.imgUrl}
                  alt="work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-[350px] h-[430px] p-[50px]">
                  <div className="bg-white w-full h-full flex justify-center items-center bg-opacity-25 opacity-0 group-hover:opacity-100 transition duration-700">
                    <div className="p-[24px] rounded-full text-white border-2 border-white">
                      <AddRoundedIcon />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-[22px] leading-[27px] mb-1 font-semibold">
                {item.title}
              </h3>
              <p className="info-text">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
