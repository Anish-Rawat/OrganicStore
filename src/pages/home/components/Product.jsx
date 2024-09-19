import React from "react";
import ProductCard from "../../../components/ProductCard";
import { LEFT_LEAF_URL } from "../../../utils/Constants";
import { productData } from "../../../utils/MockData";

const Product = ({title=''}) => {

  const data = productData;
  const itemsToShow = data?.slice(0,4);

  return (
    <div className="flex flex-row justify-center items-center py-40">
      <div className="flex flex-col justify-between items-center space-y-4">
        <p className="font-bold text-4xl text-center">{title}</p>
        <img src={LEFT_LEAF_URL} alt="leaf" className="w-20 h-auto " />
        <div className="flex flex-row justify-between items-start">
          {itemsToShow?.map((item) => {
            return <ProductCard key={item?.id} productItem={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
