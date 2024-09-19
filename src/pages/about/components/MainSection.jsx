import React from "react";
import { about } from "../../../utils/MockData";
import { LEAF } from "../../../utils/Constants";

const MainSection = () => {
  const fetchAbout = about;

  return (
    <div className="relative w-full flex lg:flex-row items-center gap-16 bg-white px-60 py-20">
      <span className="absolute -top-9 left-[44%]">
        <img src={LEAF} alt="" className="" />
      </span>
      <div className="lg:w-1/2 text-left">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          {fetchAbout?.heading}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">{fetchAbout?.par1}</p>
        <p className="text-gray-600 leading-relaxed">{fetchAbout?.par2}</p>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={fetchAbout?.url}
          alt="Grapes"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default MainSection;
