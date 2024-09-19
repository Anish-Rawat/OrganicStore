import React from "react";
import { RxCross2 } from "react-icons/rx";
import CartItem from "./components/CartItem";
import { useSelector } from "react-redux";
import Button2 from "../Button2";

const Cart = ({ setIsCartOpen }) => {
  const cartItemsList = useSelector((state) => state.cartQuantity.addedItems);

  const handleCartCancel = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={() => setIsCartOpen(false)}
      ></div>
      <div className=" w-1/3 h-screen bg-white absolute top-0 right-0 z-50 shadow-lg opacity-100 flex flex-col justify-between">
        <div>
          <div className="flex flex-row justify-between border-b border-gray-500">
            <p className="items-start p-5 text-lg">Shopping Cart</p>
            <button
              className="items-end p-5 text-lg"
              onClick={handleCartCancel}
            >
              <RxCross2 />
            </button>
          </div>
          <div>
            {cartItemsList.length ? (
              cartItemsList?.map((item) => {
                return (
                  <CartItem
                    key={item?.itemInfo?.id}
                    itemInfo={item?.itemInfo}
                    itemQuantity={item?.itemQuantity}
                  />
                );
              })
            ) : (
              <div className="h-full">
                <p className="text-center">No product in the cart</p>
              </div>
            )}
          </div>
        </div>

        <div className="bottom-0 flex items-center pb-2 px-2">
          <Button2 />
        </div>
      </div>
    </div>
  );
};

export default Cart;
