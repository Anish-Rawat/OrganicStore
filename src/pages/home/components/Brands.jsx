// eslint-disable-next-line no-unused-vars
import React from "react";
import { brandsData} from "../../../utils/MockData";


const Brands = () => {
  
  const data = brandsData;

  return (
    <div className="flex flex-row justify-center pb-20 bg-[#f8f6f3]">
      <section className="flex flex-row justify-between items-center space-x-10">
        <p className="text-2xl font-bold">Featured Brands:</p>
        <span className="flex flex-row justify-between ">
          {data?.map((item) => (
            <img key={item?.id} src={item?.url} alt="brand_name" className=""/>
          ))}
        </span>
      </section>
    </div>
  );
};

export default Brands;
