import React from "react";

const ContactCard = ({icon,par1,par2}) => {
  return (
    <div className="border border-gray-300 p-8 rounded-lg items-center flex flex-col justify-center gap-3 px-20">
      <p className="text-[#8bc34a] text-3xl">{icon}</p>
      <p className="text-xl font-thin">{par1}</p>
      <p className="text-xl font-thin">{par2}</p>
    </div>
  );
};

export default ContactCard;
