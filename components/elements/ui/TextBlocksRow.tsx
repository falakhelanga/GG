import React from "react";
import TextBlock from "./TextBlock";
import ContentWrap from "./ContentWrap";

const TextBlocksRow = ({ Text_block }: any) => {
  return (
    <ContentWrap>
      <div className="flex md:flex-row flex-col gap-6">
        {Text_block.map((item: any) => (
          <TextBlock withContentWrap={false} key={item.id} Text={item.Text} />
        ))}
      </div>
    </ContentWrap>
  );
};

export default TextBlocksRow;
