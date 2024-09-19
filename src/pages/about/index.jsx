import React from "react";
import MainSection from "./components/MainSection";

const About = () => {
  return (
    <div className="bg-[#f8f6f3] flex flex-col items-center">
      <div className="">
        <h1 className="text-5xl font-bold text-gray-800 py-20 text-center">About Us</h1>
        <MainSection />
      </div>
    </div>
  );
};

export default About;
