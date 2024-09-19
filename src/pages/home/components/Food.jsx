// eslint-disable-next-line no-unused-vars
import React from "react";
import FoodCard from "../../../components/FoodCard";
import { IoCart } from "react-icons/io5";
import Button from "../../../components/Button";
import { LEAF } from "../../../utils/Constants";
import { foodData } from "../../../utils/MockData";

const Food = () => {
  const data = foodData;

  return (
    <div className="relative w-full bg-[#f8f6f3]">
      <span className="absolute -top-9 left-[44%]">
        <img src={LEAF} alt="" />
      </span>
      <section className="flex flex-row justify-center">
        <FoodCard data={data} />
      </section>
      <div className="w-full bg-black flex flex-row justify-center px-20">
        <span className="w-3/4 flex flex-row justify-between items-center">
          <p className="font-bold text-4xl text-white text-center">
            Get 25% Off On Your First Purchase!
          </p>
          <Button btnIcon={<IoCart />} text="SHOP NOW" />
        </span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 10"
        preserveAspectRatio="none"
      >
        <path
          className="elementor-shape-fill"
          d="M350,10L340,0h20L350,10z"
        ></path>
      </svg>
      <p className="font-bold text-3xl p-10 text-center">
        Try It For Free. No Registration Needed.
      </p>
    </div>
  );
};

export default Food;
