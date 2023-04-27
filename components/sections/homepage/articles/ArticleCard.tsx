import Title from "@/components/elements/ui/Title";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import ReactMarkDown from "react-markdown";

interface ArticleCardPropTypes {
  id: number;
  image: string;
  title: string;
  body: string;
}

const ArticleCard = ({ id, image, title, body }: ArticleCardPropTypes) => {
  return (
    <div className="rounded-md overflow-hidden bg-white hover:shadow-[0_2px_8px_0px_rgba(0,0,0,0.3)] hover:translate-y-1 shadow transition-all duration-100 ease-in-out">
      <div className="h-[12rem]">
        <Image
          src={image}
          height={300}
          width={300}
          alt=""
          className="h-full object-cover w-full bg-cover bg-no-repeat bg-center"
        />
      </div>

      <div className="p-6">
        <Title size="md" className="uppercase text-green my-6">
          <ReactMarkDown>{title}</ReactMarkDown>
        </Title>
        <ReactMarkDown className="text-black text-sm md:h-[8rem] h-[10rem] overflow-hidden">
          {body}
        </ReactMarkDown>
        <div className="uppercase font-medium mt-6 text-black text-sm hover:text-pink font-semibold find-out-more cursor-pointer ">
          <span className="">read more</span>{" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-pink find-out-more-chevron"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
