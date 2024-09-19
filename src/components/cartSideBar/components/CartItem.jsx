import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addItemAsync, removeItemAsync, totalAmountAsync } from "../../../features/cartQuantity/cartQuantitySlice";

const CartItem = ({ itemInfo, itemQuantity }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    const specificItemTotalCost = itemQuantity*itemInfo?.price.slice(1); 
    dispatch(removeItemAsync(itemInfo?.id));
    dispatch(addItemAsync(-itemQuantity));
    dispatch(totalAmountAsync(-specificItemTotalCost));
  };

  return (
    <div className="px-5 py-5">
      <div className="flex flex-row justify-between border-b border-gray-500 pb-5">
        <section className="flex flex-row items-center text-lg">
          <img src={itemInfo.url} alt="itemImg" className="w-1/5" />
          <section className="flex flex-col pl-5 gap-2">
            <p>{itemInfo.productName}</p>
            <p className="text-gray-700">{`${itemQuantity} × ${itemInfo.price}`}</p>
          </section>
        </section>
        <button className="text-xl text-gray-400" onClick={handleRemoveItem}>
          <MdOutlineCancel />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
