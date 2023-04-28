import MarkDown from "@/components/elements/ui/MarkDown";
import React from "react";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

const SearchResultItem = ({
  title,
  body,
  id,
}: {
  title: string;
  body: string;
  id: number;
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/free-to-just-be-hub/${id}`);
      }}
      className="px-4 mb-8 w-full hover:text-pink"
    >
      <div className="text-lg  uppercase font-semibold">{title}</div>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        className="mt-6 w-full  "
      >
        {body}
      </ReactMarkdown>
    </div>
  );
};

export default SearchResultItem;
