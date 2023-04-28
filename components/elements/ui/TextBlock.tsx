import React, { ReactNode } from "react";
import MarkDown from "./MarkDown";
import ReactMarkDown from "react-markdown";
import rehypeRaw from "rehype-raw";

const TextBlock = ({ Text }: { Text: any }) => {
  return (
    <MarkDown
      //   rehypePlugins={[rehypeRaw]}
      className="prose w-full max-w-none md:mb-14 mb-8"
    >
      {Text}
    </MarkDown>
  );
};

export default TextBlock;
