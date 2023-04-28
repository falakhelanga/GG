import React from "react";
import TextBlock from "./TextBlock";

const TextBlocksRow = ({ Text_block }: any) => {
  return (
    <div className="flex md:flex-row flex-col gap-6">
      {Text_block.map((item: any) => (
        <TextBlock key={item.id} Text={item.Text} />
      ))}
    </div>
  );
};

export default TextBlocksRow;
