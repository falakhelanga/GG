import React from "react";
import ContentWrap from "./ContentWrap";
import Image from "next/image";
import { imageFormatter } from "@/helpers.tsx/imageFormatter";

const BadgesRow = ({ badges, text }: { badges: any; text: any }) => {
  return (
    <div className="md:mb-14 mb-8">
      <ContentWrap className="md:flex gap-4 w-full justify-center md:mb-6 mb-6 hidden ">
        {badges.data.map((image: any) => (
          <Image
            alt=""
            width={200}
            height={200}
            src={imageFormatter({ data: image })}
            key={image.id}
          />
        ))}
      </ContentWrap>
      <ContentWrap className="md:hidden gap-4 w-full justify-center md:mb-6 mb-6 grid grid-cols-3 ">
        {badges.data.map((image: any) => (
          <Image
            alt=""
            width={200}
            height={200}
            src={imageFormatter({ data: image })}
            key={image.id}
          />
        ))}
      </ContentWrap>
      <ContentWrap className="text-brown text-left md:w-[50%]">
        {text}
      </ContentWrap>
    </div>
  );
};

export default BadgesRow;
