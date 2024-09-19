// eslint-disable-next-line no-unused-vars
import React from "react";
import { APPSTORE_URL, PLAYSTORE_URL } from "../../../utils/Constants";

const FooterRight = () => {
    const quickLinks = ["Know More About Us","Visit Store","Let's Connect","Locate Stores"];

  return (
    <div className="w-1/3 flex flex-col items-start justify-between text-gray-400 gap-10 px-20">
      <section className="flex flex-col justify-between gap-10">
        <p className="font-bold text-white text-2xl">Download Our Mob ile App</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam
          gravida sollicitudin. Praesent porta enim mi, non tincidunt libero
          interdum sit amet.
        </p>
      </section>
      <section className="flex flex-col justify-between gap-10">
        <p className="font-bold text-white text-2xl">Quick Links</p>
        <span className="flex flex-col gap-2">
          {quickLinks.map((item, index) => (
            <p key={index} className='hover:text-slate-50'>{item}</p>
          ))}
        </span>
      </section>
      <section className="flex flex-row justify-between gap-4">
          <img src={PLAYSTORE_URL} alt="playstore" className="w-40"/>
          <img src={APPSTORE_URL} alt="appstore" className="w-40"/>
      </section>
    </div>
  );
};

export default FooterRight;
