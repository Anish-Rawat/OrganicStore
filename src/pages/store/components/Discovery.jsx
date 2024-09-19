import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import { productData } from "../../../utils/MockData";

const filterCategory = [
  "Default sorting",
  "Sort by popularity",
  "Sort by average rating",
  "Sort by latest",
  "Sort by price : low to high",
  "Sort by price : high to low",
];

function Discovery({pageTitle = "",discoveryData=[],filteredData=[],setFilteredData}) {

  const [options,setOptions] = useState("Default sorting");

  // const discoveryData = productData;
  // const [filteredData,setFilteredData] = useState(productData);

  const handleOnChange = (e) => {
    setOptions(e.target.value);
  }

  useEffect(()=>{
    let updatedData = productData;

    switch(options){
      case "Default sorting":
        break;
      case "Sort by popularity" :
        break;
      case "Sort by average rating":{
        const filtered = discoveryData?.filter((data)=>parseFloat(data?.rating)>4.0);
        updatedData = filtered;
        break;
      }
      case "Sort by latest" :
        break;
      case "Sort by price : low to high":{
        const filtered = [...discoveryData].sort((a,b)=>{
          return parseFloat(a?.price?.slice(1))-parseFloat(b?.price?.slice(1))
        })
        updatedData = filtered;
        break;
      }
      case "Sort by price : high to low":{
        const filtered = [...discoveryData].sort((a,b)=>{
          return parseFloat(b?.price?.slice(1))-parseFloat(a?.price?.slice(1))
        })
        updatedData = filtered;
        break;
      }
    }
    setFilteredData(updatedData);
  },[options,discoveryData])

  return (
    <div className="flex flex-col gap-10 px-20">
      <p>
        {"Home"}/ {pageTitle}
      </p>
      <p className="text-5xl font-bold text-[#8bc34a]">{pageTitle?.[0]?.toUpperCase()+pageTitle?.slice(1)?.toLowerCase()}</p>
      <div className="w-full flex flex-row justify-between items-center">
        <p>Showing 1–9 of 12 results</p>
        <select className="p-2 rounded-lg" value={options} onChange={handleOnChange}>
          {filterCategory?.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
      </div>
      <div className="flex flex-row flex-wrap mt-6">
        {filteredData?.map((item) => {
          return <ProductCard key={item?.id} productItem={item} />;
        })}
      </div>
    </div>
  );
}

export default Discovery;