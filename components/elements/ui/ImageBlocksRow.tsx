import React from "react";
import ImageBlock from "./ImageBlock";

const ImageBlocksRow = ({ image }: any) => {
  return (
    <div className="flex md:flex-row flex-col gap-6">
      {image.map((item: any) => (
        <ImageBlock key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ImageBlocksRow;
