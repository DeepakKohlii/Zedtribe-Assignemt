import React from "react";

import Images from "./assests/index";

const Home = () => {
  return (
    <div className="flex flex-row  justify-between overflow-hidden">
      <div className=" w-[50%] m-4 md:m-40 lg:m-60 ">
        <p className="text-2xl sm:text-4xl md:text-4xl lg:text-8xl font-semibold">
          Chat
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-6xl font-GochiHand my-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F06E66] via-[#E5678B] to-[#6F3ECA]">
            UI kit.
          </span>
        </p>

        <div className="relative">
          <div className="flex flex-row relative ">
            <span className="p-[10px] rounded-[15px] bg-purple-300 m-2 text-purple-700 border-purple-700 border-2 font-bold  ">
              free
            </span>
            <span className="p-[10px] rounded-[15px] bg-purple-300 m-2 text-purple-700 border-purple-700 border-2 font-bold ">
              variants
            </span>
            <span className="p-[10px] rounded-[15px] bg-purple-300 m-2 text-purple-700 border-purple-700 border-2 font-bold ">
              auto Layout
            </span>
            <img
              src={Images.click}
              alt="My Image"
              className="absolute  top-[15%] left-[50%] transform translate-x-[-50%] -translate-y-[-50%] w-12 h-12 z-10 cursor-pointer"
            />
          </div>
          <div className="">
            <img
              src={Images.heroleft}
              alt="My Image"
              className="w-[250px] h-[250px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row w-[50%] ">
        <div className="mt-[99%]  ">
          <img src={Images.card} alt="card" />
        </div>
        <div className="flex flex-col w-[90%] mt-12 ">
          <img src={Images.header} alt="My Image" />
          <img src={Images.middle} alt="My Image" />
          <img src={Images.last} alt="My Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
