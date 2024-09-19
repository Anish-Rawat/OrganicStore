import React from "react";
import Button from "./Button";
import { IoCart } from "react-icons/io5";
import { DEAL_URL } from "../utils/Constants";

const DealCard = () => {

  const style = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${DEAL_URL})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  return (
    <div
      className="w-fullflex flex-col justify-between items-center rounded-lg p-10 bg-cover bg-center"
      style={style}
    >
      <section className="flex flex-col justify-between gap-6 ">
        <p className="text-center font-bold text-4xl text-white">
          Deal Of The Day 15% Off On All Vegetables!
        </p>
        <p className="text-gray-300 text-center text-lg">
          I am text block. Click edit button to change this tex em ips.
        </p>
        <div className="flex justify-center">
          <Button btnIcon={<IoCart />} text="SHOP NOW" />
        </div>
      </section>
    </div>
  );
};

export default DealCard;
