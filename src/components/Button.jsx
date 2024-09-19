import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import {
  addItemAsync,
  totalAmount,
  totalAmountAsync,
  addedItemsAsync,
} from "../features/cartQuantity/cartQuantitySlice";

const Button = ({
  btnIcon,
  text,
  price,
  quantity,
  quantityView,
  setQuantityView,
  fetchProductInfo,
}) => {
  // const dispatch = useDispatch();

  const handleOnClick = () => {
    // if (quantityView === false) {
    //   const cost = parseInt(price?.slice(1));
    //   dispatch(addItemAsync(1));
    //   dispatch(totalAmountAsync(cost));
    //   dispatch(
    //     addedItemsAsync({ itemInfo: fetchProductInfo, itemQuantity: quantity })
    //   );
    //   setQuantityView(true);
    //   setIsBtnVisible(false);
    // }
  };

  return (
    <button
      type="button"
      onClick={handleOnClick}
      className="flex flex-row items-center bg-[#6a9739] text-lg text-white rounded-md font-bold my-10 hover:bg-[#89b15f]"
    >
      <span className="py-5 pr-2 pl-5">{btnIcon}</span>
      {/* {quantityView === false && (
        <span className="py-5 pl-2 pr-5">{text}</span>
      )} */}
      <span className="py-5 pl-2 pr-5">{text}</span>
    </button>
  );
};

export default Button;
