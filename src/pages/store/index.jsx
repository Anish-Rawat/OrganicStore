// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { productData } from "../../utils/MockData";
import Discovery from "./components/Discovery";
import Unique from "./components/Unique";
import Search from "./components/Search";

const Store = () => {
  const location = useLocation();
  const splitEndUrl = location?.pathname?.split("");
  const pageTitle = splitEndUrl?.slice(1)?.join("");

  const discoveryData = productData;
  const [filteredData, setFilteredData] = useState(productData);

  return (
    <div className="w-full h-auto flex flex-col items-center">
      <div className="w-4/5 flex flex-row py-20">
        <section className="w-1/5">
          <Search productList={discoveryData} filterData={filteredData} setFilteredData={setFilteredData}/>
          <span className="flex flex-wrap flex-col justify-between gap-2 pt-5 px-3">
            <NavLink to={`/${"groceries"}`}>
              <p className="text-[#6a9739]">Groceries{` (${10})`}</p>
            </NavLink>
            <NavLink to={`/${"juice"}`}>
              <p className="text-[#6a9739]">Juice{` (${9})`}</p>
            </NavLink>
          </span>
          <Unique />
        </section>
        <Discovery pageTitle={pageTitle} discoveryData={discoveryData} filteredData={filteredData} setFilteredData={setFilteredData}/>
      </div>
    </div>
  );
};

export default Store;
