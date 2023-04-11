import { faAngleRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WhatsNewCard = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="grid grid-cols-3">
      <div className="grid col-span-1">
        <div className="bg-[url('/images/gallery-test.jpg')] w-48 h-48 bg-cover rounded-md"></div>
      </div>
      <div className="grid col-span-2 ">
        <h1 className="font-bold text-black text-lg">{title}</h1>
        <p className="mr-20 text-black">{text}</p>
        <div className="uppercase font-bold text-black absolute bottom-10">
          <span className="hover:text-pink">Find out More</span>
          <FontAwesomeIcon icon={faAngleRight} className="text-pink pl-2" />
        </div>
      </div>
    </div>
  );
};

export default WhatsNewCard;
