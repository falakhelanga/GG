import React from "react";
import ImageBlock from "./ImageBlock";

const ImageBlocksRow = ({ image }: any) => {
  return (
    <div className="flex md:flex-row flex-col md:gap-6 gap-4 md:mb-8 mb-8">
      {image.map((item: any) => (
        <ImageBlock key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ImageBlocksRow;
