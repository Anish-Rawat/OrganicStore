import React from "react";
import ContactCard from "./components/ContactCard";
import { contact } from "../../utils/MockData";

const Contact = () => {
  const fetchContact = contact;
  // const {number1,number2,icon:phoneIcon} = fetchContact?.getInTouch?.contactNumber;
  // const {mail1,mail2,icon:mailIcon} = fetchContact?.getInTouch?.mailId;
  // const {location,country,icon:locationIcon} = fetchContact?.getInTouch?.address;

  return (
    <div className="bg-[#f8f6f3] py-16">
      <div className="relative">
        <h2 className="text-5xl font-bold text-gray-800 mb-12 text-center">
          Get In Touch
        </h2>

        <div className="absolute bg-white w-2/3 left-1/2 transform -translate-x-1/2 rounded-lg flex flex-row justify-center items-center gap-8 py-20">
          {/* <ContactCard icon={phoneIcon} par1={number1} par2={number2}/>
          <ContactCard icon={mailIcon} par1={mail1} par2={mail2}/>
          <ContactCard icon={locationIcon} par1={location} par2={country}/> */}
          {fetchContact?.map((item, index) => (
            <ContactCard
              key={index}
              icon={item?.icon}
              par1={item?.par1}
              par2={item?.par2}
            />
          ))}
        </div>

        <div className="py-48"></div>

        <div className="bg-[#f5f4f5] py-16">
          <div className="text-center">
            <p className="font-bold text-4xl">Frequently Asked Questions!</p>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default Contact;
