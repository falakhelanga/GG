import React, { ReactNode } from "react";
import MarkDown from "./MarkDown";
import ReactMarkDown from "react-markdown";
import rehypeRaw from "rehype-raw";
import ContentWrap from "./ContentWrap";

const TextBlock = ({
  Text,
  withContentWrap = true,
}: {
  Text: any;
  withContentWrap?: boolean;
}) => {
  return (
    <>
      {withContentWrap && (
        <ContentWrap>
          <MarkDown
            //   rehypePlugins={[rehypeRaw]}
            className="prose w-full max-w-none md:mb-14 mb-8 max-sm:text-left"
          >
            {Text}
          </MarkDown>
        </ContentWrap>
      )}
      {!withContentWrap && (
        <MarkDown
          //   rehypePlugins={[rehypeRaw]}
          className="prose w-full max-w-none md:mb-14 mb-8 max-sm:text-left"
        >
          {Text}
        </MarkDown>
      )}
    </>
  );
};

export default TextBlock;
