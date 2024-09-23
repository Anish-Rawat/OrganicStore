import { IoPersonSharp } from "react-icons/io5";
import { GiBasket } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomPWA from "../../../customPWA";
import './CustomPWA.css'

const NavbarRightItems = ({ setIsCartOpen }) => {
  const cartItemQuantity = useSelector(
    (state) => state.cartQuantity.totalQuantity
  );
  const totalCost = useSelector((state) => state.cartQuantity.totalCost);

  const navbarRightItems = [
    { id: 4, item: "About" },
    { id: 5, item: "Contact" },
    { id: 6, item: `£${totalCost}` },
  ];

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <span className="p-10 flex flex-row items-center">
      <div className="relative mr-5">
        <CustomPWA />
      </div>
      {navbarRightItems.map((item) => (
        <NavLink to={`${item.item.toLowerCase()}`} key={item.id}>
          <span className="p-3 text-lg hover:text-[#8bc34a]">{item.item}</span>
        </NavLink>
      ))}
      <span className="px-5 text-2xl" onClick={handleCartClick}>
        <GiBasket className=" relative text-[#8bc34a] hover:text-black" />
        <p className="absolute top-[30px] right-[120px] text-black bg-[#8bc34a] rounded-3xl p-1 text-center text-xs">
          {cartItemQuantity}
        </p>
      </span>
      <NavLink to="/login" className="px-5 text-2xl">
        <span>
          <IoPersonSharp />
        </span>
      </NavLink>
    </span>
  );
};

export default NavbarRightItems;
