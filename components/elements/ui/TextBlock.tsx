import React, { ReactNode } from "react";
import MarkDown from "./MarkDown";
import ReactMarkDown from "react-markdown";
import rehypeRaw from "rehype-raw";
import ContentWrap from "./ContentWrap";

const TextBlock = ({ Text }: { Text: any }) => {
  return (
    <ContentWrap>
      <MarkDown
        //   rehypePlugins={[rehypeRaw]}
        className="prose w-full max-w-none md:mb-14 mb-8"
      >
        {Text}
      </MarkDown>
    </ContentWrap>
  );
};

export default TextBlock;
