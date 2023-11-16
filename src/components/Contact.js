import React from "react";
import asset37 from "../assets/asset 37.svg";
import asset38 from "../assets/asset 38.svg";
import asset39 from "../assets/asset 39.svg";

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex relative bg-black-800 text-white">
      <div className="w-[1200px] m-auto py-[140px] flex justify-between relative">
        <div className="contact-left w-6/12">
          <h1 className="text-[50px] leading-[60px] mb-5 font-bold">
            Ready to get started? Create an account today
          </h1>
          <p className="text-[20px] text-yellow mb-5 font-semibold">
            Need a successful project?
          </p>
          <p className="text-[20px] w-11/12 pb-10">
            Proactive domination. At the end of the day, going for normal that
            has evolved from generation.
          </p>
          <div className="flex flex-col gap-7">
            <div className="flex place-items-center gap-5">
              <div className="bg-purple w-[80px] h-[80px] rounded-full flex justify-center items-center">
                <img src={asset37} alt="email-icon" width={20} />
              </div>
              <div>
                <h3 className="text-[20px] font-bold">Email</h3>
                <p className="text-[20px] text-gray-light">bitnbyt@gmail.com</p>
              </div>
            </div>
            <div className=" flex place-items-center gap-5">
              <div className="bg-purple w-[80px] h-[80px] rounded-full flex justify-center items-center">
                <img src={asset38} alt="phone-icon" width={20} />
              </div>
              <div>
                <h3 className="text-[20px] font-bold">Phone support</h3>
                <p className="text-[20px] text-gray-light">+91 3448835234</p>
              </div>
            </div>
            <div className=" flex place-items-center gap-5">
              <div className="bg-purple w-[80px] h-[80px] rounded-full flex justify-center items-center">
                <img src={asset39} alt="location-icon" width={20} />
              </div>
              <div>
                <h3 className="text-[20px] font-bold">Address</h3>
                <p className="text-[20px] text-gray-light">
                  Blue orchid Tower, Madhepura, Bihar
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right w-5/12 rounded-3xl p-16 overflow-hidden relative bg-opacity-60 gradient">
          <form className="flex flex-col w-full gap-6 relative">
                <input type="text" name="name" placeholder="your name*" className="text-white outline-none text-lg rounded-[30px] w-full bg-black-800 px-6 placeholder-white py-5 font-semibold "/>
                <input type="email" name="email" placeholder="your email*" className="text-white text-lg outline-none rounded-[30px] w-full bg-black-800 px-6 placeholder-white py-5 font-semibold"/>
                <textarea rows={5} name="details" placeholder="Write Project Details" className="text-white text-lg outline-none rounded-[30px] w-full bg-black-800 px-6 placeholder-white py-5 font-semibold"/>
                <button className="py-5 bg-white rounded-[30px] text-black text-lg font-semibold hover:bg-white-smoke">Send message</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
