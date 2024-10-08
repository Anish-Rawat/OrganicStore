import React from "react";
import { useDispatch } from "react-redux";
import {
  addItemAsync,
  totalAmount,
  totalAmountAsync,
  addedItemsAsync,
} from "../features/cartQuantity/cartQuantitySlice";

const Button2 = ({
  text,
  price,
  quantity,
  quantityView,
  setQuantityView,
  fetchProductInfo,
  setIsBtnVisible,
  setQuantity,
}) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    if (quantityView === false) {
      const cost = parseInt(price?.slice(1));
      dispatch(addItemAsync(1));
      dispatch(totalAmountAsync(cost));
      dispatch(
        addedItemsAsync({ itemInfo: fetchProductInfo, itemQuantity: 1 })
      );
      setQuantityView(true);
      setQuantity(1);
      setIsBtnVisible(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleOnClick}
      className={`${
        text === "ADD TO CART" ? "w-36" : "w-full"
      } bg-[#6a9739] text-lg text-white rounded-md hover:bg-[#89b15f] p-3 h-[50px]`}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button2;
