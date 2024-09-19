import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";

const Search = ({productList=[],filterData=[],setFilteredData}) => {

  // const productList = productData;
  // const [filterItems,setFilterItems] = useState(productData);
  const [search,setSearch] = useState("");

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  }

  const handleOnClick = () => {
    const filter =  productList?.filter((item)=>(item?.productName?.toLowerCase()?.includes(search?.toLowerCase())));
    setFilteredData(filter);
  }

  useEffect(()=>{
    console.log(filterData);
  },[filterData])

  return (
    <div className="flex flex-row space-x-2">
      <input
        type="text"
        value={search}
        onChange={handleSearchInput}
        placeholder="Search products..."
        className="p-2 border border-black border-stone-950"
      />
      <button type="button" onClick={handleOnClick} className="flex justify-center bg-[#6a9739] p-3 rounded-lg">
        <span>
          <FaGreaterThan className="text-white"/>
        </span>
      </button>
    </div>
  );
};

export default Search;
