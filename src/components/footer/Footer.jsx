import React from "react";
import { FooterMiddle } from "./components/FooterMiddle";
import FooterRight from "./components/FooterRight";

const Footer = () => {
  const APPLOGO_PNG_URL =
    "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png";

  return (
    <footer className="w-full h-auto bg-black flex flex-row py-20 px-40">
      <div className="w-1/3 flex flex-col gap-10 px-20">
        <img src={APPLOGO_PNG_URL} alt="applogo" className="w-40 h-auto"></img>
        <p className="text-gray-400">
          Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut
          quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis
          faucibus urna. Suspendisse pellentesque.
        </p>
      </div>
      <FooterMiddle/>
      <FooterRight/>
    </footer>
  );
};

export default Footer;
