import React from "react";
import ImageBlock from "./ImageBlock";
import TextBlock from "./TextBlock";
import ContentWrap from "./ContentWrap";
import Image from "next/image";
import { imageFormatter } from "@/helpers.tsx/imageFormatter";
import MarkDown from "./MarkDown";

const Row = ({
  image,
  text,
  title,
}: {
  image: any[];
  text: any[];
  title: string;
}) => {
  return (
    <ContentWrap className="md:mb-10 mb-8">
      <div className="text-2xl font-bold mb-6">{title}</div>
      <div className="flex md:flex-row flex-col md:gap-3 items-start">
        {image.map((item) => (
          <div
            key={item.id}
            className=" h-full  flex items-center w-full relative object-cover "
          >
            <Image
              className="h-full w-full object-cover"
              width={3000}
              height={3000}
              src={imageFormatter(item.desktop_image)}
              alt=""
            />
          </div>
        ))}
        {text.map((item, idx) => (
          <MarkDown
            key={idx}
            //   rehypePlugins={[rehypeRaw]}
            className="prose w-full max-w-none   max-sm:text-left"
          >
            {item.Text}
          </MarkDown>
        ))}
      </div>
    </ContentWrap>
  );
};

export default Row;
