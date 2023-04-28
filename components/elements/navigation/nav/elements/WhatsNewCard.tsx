import truncate from "@/helpers.tsx/textTruncate";
import { faAngleRight, faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

const WhatsNewCard = ({
  title,
  text,
  image,
  id,
}: {
  title: string;
  text: string;
  image: any;
  id: string;
}) => {
  return (
    <Link href={`/products-range/${id}`} className="grid grid-cols-3 gap-2">
      <div className="  rounded-md bg-[#E8E3E3] flex items-center justify-center h-[12rem]  ">
        <Image
          alt="title"
          height={100}
          width={100}
          src={`${image.data.attributes.url}`}
          className=" w-full p-[2rem] bg-cover rounded-md h-full w-full"
        ></Image>
      </div>
      <div className="flex flex-col col-span-2 hover:text-pink transition-all ease-in-out transition-duration-300">
        <h1 className="font-bold  text-lg">{title}</h1>
        <ReactMarkdown className="   flex-1">
          {truncate(160, text)}
        </ReactMarkdown>
        <div className="uppercase font-medium   text-sm hover:text-pink font-semibold find-out-more ">
          <Link href={`products-range/${id}`}>
            <span className="">find out more</span>{" "}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-pink find-out-more-chevron"
            />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default WhatsNewCard;
