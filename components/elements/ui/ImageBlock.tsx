import { imageFormatter } from "@/helpers.tsx/imageFormatter";
import Image from "next/image";
import React from "react";
import ContentWrap from "./ContentWrap";

const ImageBlock = ({ desktop_image, mobile_image }: any) => {
  return (
    <ContentWrap>
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
    </ContentWrap>
  );
};

export default ImageBlock;
