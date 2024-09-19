import React from "react";
import { useContext, useState } from "react";
import NavbarLeftItems from "./components/NavbarLeftItems";
import NavbarRightItems from "./components/NavbarRightItems";
import { NavLink } from "react-router-dom";
import { APPLOGO_URL } from "../../utils/Constants";
import Cart from "../cartSideBar/Cart";

const Navbar = () => {

  const [isCartOpen,setIsCartOpen] = useState(false);

  return (
    <div className="flex items-center bg-white">
      <NavLink to={"/"}>
        <img
          src={APPLOGO_URL}
          alt="applogo"
          height="94px"
          width="200px"
          className="px-7"
        />
      </NavLink>
      <section className=" w-full flex flex-row items-center justify-between ">
        <NavbarLeftItems />
        <NavbarRightItems setIsCartOpen={setIsCartOpen}/>
      </section>
      {
        isCartOpen && <Cart setIsCartOpen={setIsCartOpen}/>
      }
    </div>
  );
};

export default Navbar;
