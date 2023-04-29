import React from "react";
import ContentWrap from "./ContentWrap";
import Image from "next/image";
import { imageFormatter } from "@/helpers.tsx/imageFormatter";

const BadgesRow = ({ badges, text }: { badges: any; text: any }) => {
  console.log(badges.data[0], "badges");
  return (
    <div className="md:mb-14 mb-8">
      <ContentWrap className="flex gap-4 w-full justify-center md:mb-6 mb-6 ">
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
      <ContentWrap className="text-brown text-center">{text}</ContentWrap>
    </div>
  );
};

export default BadgesRow;
