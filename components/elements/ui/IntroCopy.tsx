import React from "react";
import ContentWrap from "./ContentWrap";
import MarkDown from "./MarkDown";
import ReactMarkDown from "react-markdown";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const IntroCopy = ({ text }: { text: any }) => {
  console.log(text, "textt");
  console.log("I am called");
  return (
    <ContentWrap>
      <ReactMarkdown
        //   rehypePlugins={[rehypeRaw]}
        className="prose  max-w-none w-full md:mb-14 mb-8 text-center text-xl text-black"
      >
        {text}
      </ReactMarkdown>
    </ContentWrap>
  );
};

export default IntroCopy;
