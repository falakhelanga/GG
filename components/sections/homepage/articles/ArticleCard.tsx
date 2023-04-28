import MarkDown from "@/components/elements/ui/MarkDown";
import Title from "@/components/elements/ui/Title";
import { imageFormatter } from "@/helpers.tsx/imageFormatter";
import truncate from "@/helpers.tsx/textTruncate";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkDown from "react-markdown";

interface ArticleCardPropTypes {
  id: number;
  desktop_image: string;
  title: string;
  body: string;
  mobile_image: string;
}

const ArticleCard = ({
  id,
  desktop_image,
  mobile_image,
  title,
  body,
}: ArticleCardPropTypes) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/free-to-just-be-hub/${id}`);
      }}
      className="rounded-md md:cursor-pointer overflow-hidden bg-white hover:shadow-[0_2px_8px_0px_rgba(0,0,0,0.3)] hover:translate-y-1 shadow transition-all duration-100 ease-in-out"
    >
      <div className="h-[12rem] md:block hidden">
        <Image
          src={imageFormatter(desktop_image)}
          height={300}
          width={300}
          alt=""
          className="h-full object-cover w-full bg-cover bg-no-repeat bg-center"
        />
      </div>
      <div className="h-[12rem] block md:hidden">
        <Image
          src={imageFormatter(mobile_image)}
          height={300}
          width={300}
          alt=""
          className="h-full object-cover w-full bg-cover bg-no-repeat bg-center"
        />
      </div>

      <div className="p-6">
        <MarkDown className="font-semibold text-2xl uppercase text-green my-6">
          {truncate(40, title)}
        </MarkDown>

        <MarkDown className="text-black text-sm md:h-[7.5rem] h-[10rem] overflow-hidden text-ellipsis">
          {body}
        </MarkDown>
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
