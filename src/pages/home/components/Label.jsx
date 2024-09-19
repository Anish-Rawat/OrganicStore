import React from "react";
import { label } from "../../../utils/MockData";

const Label = () => {
  const getLabel = label;
  return (
    <div className="flex flex-row items-center justify-center bg-black text-white py-10">
      {
        getLabel?.length > 0 ? (
          getLabel?.map((item) => {
            return (
                <section key={item?.id} className="bg-[#303030] p-10 m-2 flex flex-row items-center gap-5">
                    <p className="text-3xl text-[#6a9739]">{item?.icon}</p>
                    <span className="flex flex-col">
                        <p className="text-lg font-bold">{item?.primary}</p>
                        <p>{item?.secondary}</p>
                    </span>
                </section>
            )
          })
        ) : (
          <p>No Label Fetched From API</p>
        )
      }
    </div>
  );
};

export default Label;
