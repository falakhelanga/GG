import Image from "next/image";
import React from "react";
import MarkDown from "./MarkDown";

const QuoteText = ({ text }: any) => {
  return (
    <div className="flex w-full justify-center items-start md:mb-14 mb-8">
      <div className="flex md:w-[80%] w-full items-start gap-3">
        {" "}
        <Image
          width={40}
          height={40}
          alt=""
          src="/images/gg_quotation_marks.svg"
        />
        <MarkDown className="text-xl text-green  flex items-start -mt-2">
          {text}
        </MarkDown>
      </div>
    </div>
  );
};

export default QuoteText;
