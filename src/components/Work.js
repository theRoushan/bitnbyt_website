import React from "react";
import { work } from "../constants/constant";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Link } from "react-router-dom";

const Work = (props) => {
  return (
    <div className="w-full xl:w-[1200px] px-[4%] lg:px-[1%] xl:px-0 m-auto relative py-[60px] md:py-[100px] xl:py-[140px] ">
      {props.heading && (
        <h1 className="text-[32px] md:text-[36px] xl:text-[40px] font-bold xl:leading-[48px] md:text-center mb-[10px]">
          {props.heading}
        </h1>
      )}
      {props.desc && (
        <p className="info-text  md:text-center mb-[40px]">{props.desc}</p>
      )}
      <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-10 lg:px-[30px] ">
        {work.map((item) => {
          return (
            <div key={item.imgUrl}>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
