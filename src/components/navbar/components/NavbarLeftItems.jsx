// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLeftItems = () => {
  const navbarLeftItems = [
    { id: 1, item: "Everything" },
    { id: 2, item: "Groceries" },
    { id: 3, item: "Juice" },
  ];
  return (
    <span className="p-10 flex flex-row items-center">
      {navbarLeftItems.map((item) => (
        <NavLink to={`/${item.item.toLowerCase()}`} key={item.id}>
          <span className="p-3 text-lg hover:text-[#8bc34a]">
            {item.item}
          </span>
        </NavLink>
      ))}
    </span>
  );
};

export default NavbarLeftItems;
