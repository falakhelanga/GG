import React from "react";
import MarkDown from "./MarkDown";

const HeadingMarkDown = ({ text }: { text: string }) => {
  return <MarkDown className="text-center my-14 ">{text}</MarkDown>;
};

export default HeadingMarkDown;
