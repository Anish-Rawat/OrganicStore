import { createContext, useState } from "react";

const TotalCostContext = createContext();

const TotalCostProvider = ({ children }) => {
  const [totalCost, setTotalCost] = useState("0.00");

  return (
    <TotalCostContext.Provider value={{ totalCost, setTotalCost }}>
      {children}
    </TotalCostContext.Provider>
  );
};

export { TotalCostContext, TotalCostProvider };
