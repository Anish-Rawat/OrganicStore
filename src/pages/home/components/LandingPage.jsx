// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoCart } from "react-icons/io5";
import Button from "../../../components/Button";
import { LEFT_LEAF_URL } from "../../../utils/Constants";
import { landingData } from "../../../utils/MockData";

const style = {
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom right",
  backgroundSize: "25%",
};

const LandingPage = () => {
  const data = landingData;
  const { IMAGE_URL, subTitle, content } = data;

  return (
    <div
      className="w-full h-full flex justify-center px-24 pt-24 
bg-[#f8f6f3] py-20"
      style={{ ...style, backgroundImage: `url(${LEFT_LEAF_URL})` }}
    >
      <main className="w-10/12 flex flex-row justify-evenly">
        <section className="w-5/12">
          <img src={IMAGE_URL} alt="image" />
        </section>
        <section className="w-5/12 flex-col">
          <img src={LEFT_LEAF_URL} alt="leaf" className="w-10 h-10 mb-5" />
          <p className="text-left text-lg text-slate-800 mb-7 font-bold">
            {subTitle}
          </p>
          <p className="text-left text-6xl font-bold mb-7">
            Join The Organic <br /> <span className="mb-7">Movement!</span>
          </p>
          <p className="mb-7">{content}</p>
          <Button btnIcon={<IoCart />} text="SHOP NOW" />
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
