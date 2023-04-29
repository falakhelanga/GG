import React from "react";
import ImageBlock from "./ImageBlock";
import TextBlock from "./TextBlock";
import ContentWrap from "./ContentWrap";
import Image from "next/image";
import { imageFormatter } from "@/helpers.tsx/imageFormatter";

const Row = ({
  image,
  text,
  title,
}: {
  image: any[];
  text: any[];
  title: string;
}) => {
  console.log(text, "text");
  return (
    <ContentWrap className="md:mb-14 mb-8">
      <div className="text-2xl font-bold mb-6">{title}</div>
      <div className="flex md:flex-row flex-col gap-3 items-center">
        {image.map((item) => (
          <div key={item.id} className=" h-full flex items-center w-full">
            <Image
              className="h-full w-full"
              width={3000}
              height={3000}
              src={imageFormatter(item.desktop_image)}
              alt=""
            />
          </div>
        ))}
        {text.map((item) => (
          <TextBlock key={item.id} {...item} />
        ))}
      </div>
    </ContentWrap>
  );
};

export default Row;
