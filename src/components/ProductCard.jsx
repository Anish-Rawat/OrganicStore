import React from "react";
import { NavLink } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const star = Array(5).fill(0);

const ProductCard = ({ productItem = {} }) => {
  const { id, url, category, productName, price } = productItem;

  return (
    <div className=" flex flex-col justify-between items-center p-3">
      <NavLink to={`/product-details/${id}`}>
        <img
          src={url}
          alt="product_img"
          className="hover:-translate-y-1 hover:scale-105"
        />
      </NavLink>
      <p>{category}</p>
      <p>{productName}</p>
      <span className="flex flex-row flex-wrap">
        {star?.map((_, index) => (
          <CiStar key={index} className="text-yellow-400"/>
        ))}
      </span>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
