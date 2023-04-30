import { imageFormatter } from "@/helpers.tsx/imageFormatter";
import React from "react";

const BackgroundWithCenteredText = ({ backgroundImage, text }: any) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imageFormatter(backgroundImage)})`,
        }}
        className="md:h-[70vh] h-[100vh]  w-full bg-cover   bg-no-repeat bg-center  md:mb-8 mb-8 md:block hidden"
      >
        <div className="h-full w-full items-end justify-center flex">
          <div className="md:w-[80%] w-[90%] max-sm:text-sm bg-white p-6 rounded-t">
            {text}
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url('/images/mobile_about_image_2.png')`,
        }}
        className="md:h-[70vh] h-[100vh]  w-full bg-cover   bg-no-repeat bg-center  md:mb-8 mb-8 md:hidden block"
      >
        <div className="h-full w-full items-end justify-center flex">
          <div className="md:w-[80%] w-[90%] max-sm:text-sm bg-white p-6 rounded-t">
            {text}
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundWithCenteredText;
