import { imageFormatter } from "@/helpers.tsx/imageFormatter";
import Image from "next/image";
import React from "react";

const ImageBlock = ({ desktop_image, mobile_image }: any) => {
  return (
    <>
      <div className="w-full h-auto max-h-[1000px] md:block hidden ">
        <Image
          alt=""
          width={2000}
          height={2000}
          src={imageFormatter(desktop_image)}
        />
      </div>
      <div className="w-full h-auto max-h-[1000px] md:hidden block ">
        <Image
          alt=""
          width={2000}
          height={2000}
          src={imageFormatter(mobile_image)}
        />
      </div>
    </>
  );
};

export default ImageBlock;
