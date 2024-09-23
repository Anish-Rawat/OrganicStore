import { useContext, useEffect, useState } from "react";
import Button from "../../../components/Button";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addedItemsAsync,
  addItem,
  addItemAsync,
  removeItemAsync,
  totalAmount,
  totalAmountAsync,
} from "../../../features/cartQuantity/cartQuantitySlice";
import Button2 from "../../../components/Button2";

const ProductInfo = ({ fetchProductInfo = {} }) => {
  const [quantity, setQuantity] = useState(1);
  const [quantityView, setQuantityView] = useState(false);
  const [isBtnVisible, setIsBtnVisible] = useState(true);
  const { id, productName, about, price } = fetchProductInfo;

  const dispatch = useDispatch();
  const addedItemsList = useSelector((state) => state.cartQuantity.addedItems);
  console.log("idddddd",id);
  console.log("added items list ",addedItemsList);
  const selectedItem = addedItemsList.find((item) => item?.itemInfo?.id === id);

  const selectedItemQuantity = selectedItem?.itemQuantity || 0;
  console.log(selectedItem);
  console.log("wwwwww",selectedItemQuantity);
  
  useEffect(() => {
    if (selectedItemQuantity > 0) {
      setQuantity(selectedItemQuantity);
      setQuantityView(true);
      setIsBtnVisible(false);
    } else {
      setQuantity(1);
      setQuantityView(false);
      setIsBtnVisible(true);
    }
  }, [selectedItemQuantity]);

  useEffect(() => {
    if (quantity === 0) {
      dispatch(removeItemAsync(id)); 
      setIsBtnVisible(true);
      setQuantityView(false);
    }
  }, [quantity, id]);

  const updateQuantity = (newQuantity) => {
    const diff = newQuantity - quantity;
    const productPrice = parseFloat(price?.slice(1)) || 0;
    const selectedItemPrevQuantity = selectedItemQuantity || 0;
    const selectedItemQuantityDiff = newQuantity - selectedItemPrevQuantity;

    dispatch(addItemAsync(diff));
    dispatch(totalAmountAsync(diff * productPrice));

    dispatch(
      addedItemsAsync({
        itemInfo: fetchProductInfo,
        itemQuantity: selectedItemQuantityDiff,
      })
    );
    dispatch
    setQuantity(newQuantity);
  };

  const handleOnChange = (e) => {
    const newQuantity = parseInt(e?.target?.value) || 0;
    updateQuantity(newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = Math.max(quantity - 1, 0);
    updateQuantity(newQuantity);
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    updateQuantity(newQuantity);
  };

  return (
    <div className="flex flex-col flex-wrap gap-5">
      <p className="text-4xl font-bold">{productName}</p>
      <span className="text-3xl font-bold">
        {price}
        <span className="text-lg font-thin"> + Free Shipping</span>
      </span>
      <p>{about}</p>
      <div className="flex flex-row items-center gap-3">
        {quantityView && (
          <div className="flex border border-gray-300 rounded">
            <button
              type="button"
              onClick={handleDecrement}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              onChange={handleOnChange}
              className="w-12 text-center border-none focus:ring-0"
            />
            <button
              type="button"
              onClick={handleIncrement}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              +
            </button>
          </div>
        )}
        {isBtnVisible && (
          <Button2
            text={"ADD TO CART"}
            price={price}
            quantityView={quantityView}
            quantity={quantity}
            setQuantityView={setQuantityView}
            fetchProductInfo={fetchProductInfo}
            setIsBtnVisible={setIsBtnVisible}
            setQuantity={setQuantity}
          />
        )}
      </div>
      <div className="flex flex-row">
        <span>Categories: </span>
        <NavLink to="/groceries">
          <span className="text-[#8bc34a] p-1">Groceries,</span>
        </NavLink>
        <NavLink to="/juice">
          <span className="text-[#8bc34a] p-1">Juice</span>
        </NavLink>
      </div>
    </div>
  );
};

export default ProductInfo;
