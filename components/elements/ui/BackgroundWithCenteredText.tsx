import { imageFormatter } from "@/helpers.tsx/imageFormatter";
import React from "react";

const BackgroundWithCenteredText = ({ backgroundImage, text }: any) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageFormatter(backgroundImage)})`,
      }}
      className="h-[70vh]  w-full bg-cover bg-center md:mb-8 mb-8"
    >
      <div className="h-full w-full items-end justify-center flex">
        <div className="md:w-[80%] w-[90%] bg-white p-6 rounded-t">{text}</div>
      </div>
    </div>
  );
};

export default BackgroundWithCenteredText;
