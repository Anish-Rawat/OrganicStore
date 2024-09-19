import { createContext, useState } from "react";

const CartQuantityContext = createContext();

const CartQuantityProvider = ({ children }) => {
  const [cartItemQuantity, setCartItemQuantity] = useState(0);

  return (
    <CartQuantityContext.Provider
      value={{ cartItemQuantity, setCartItemQuantity }}
    >
      {children}
    </CartQuantityContext.Provider>
  );
};

export { CartQuantityContext, CartQuantityProvider };
