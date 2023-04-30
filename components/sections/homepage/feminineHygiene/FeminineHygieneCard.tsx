import Title from "@/components/elements/ui/Title";
import { ColoursEnum } from "@/enums/colourEnum";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useMemo } from "react";
import ReactMarkDown from "react-markdown";
interface FeminineHygieneCardPropType {
  color: string;
  body: string;
  title: string;
  className?: string;
  smallTitle: string;
  largeTitle: string;
  link: string;
}

const FeminineHygieneCard = ({
  color,
  body,
  title,
  className,
  smallTitle,
  largeTitle,
  link,
}: FeminineHygieneCardPropType) => {
  const bgColor = useMemo(() => {
    if (color === "Beige") {
      return "bg-[#cfb9bb]";
    }
    if (color === "DarkPink") {
      return "bg-[#de2e64]";
    }
    if (color === "GGPink") {
      return "bg-[#e9608a]";
    }
    if (color === "GGTurquoise") {
      return "bg-[#43b8b4]";
    }
    if (color === "Grey") {
      return "bg-[#7d7d7d]";
    }
    if (color === "LightPink") {
      return "bg-[#d995ad]";
    }
    if (color === "OffWhite") {
      return "bg-[#f1ecee]";
    }
    if (color === "LightTurquoise") {
      return "bg-[#9bc3c1]";
    }
    if (color === "White") {
      return "bg-[#FFFFFF]";
    }
    // if (color === "lightPink") {
    //   return "bg-lightPink";
    // }
    // if (color === "lightGreen") {
    //   return "bg-lightGreen";
    // }
  }, [color]);
  const textColor = useMemo(() => {
    if (color === "Beige") {
      return "text-[#cfb9bb]";
    }
    if (color === "DarkPink") {
      return "text-[#de2e64]";
    }
    if (color === "GGPink") {
      return "text-[#e9608a]";
    }
    if (color === "GGTurquoise") {
      return "text-[#43b8b4]";
    }
    if (color === "Grey") {
      return "text-[#7d7d7d]";
    }
    if (color === "LightPink") {
      return "text-[#d995ad]";
    }
    if (color === "OffWhite") {
      return "text-[#f1ecee]";
    }
    if (color === "LightTurquoise") {
      return "text-[#9bc3c1]";
    }
    if (color === "White") {
      return "text-[#FFFFFF]";
    }
  }, [color]);

  return (
    <div className={` ${className} max-sm:rounded-b-md max-sm:overflow-hidden`}>
      <div className={`${bgColor} w-full h-10 rounded-t-md `}></div>
      <div className="md:bg-[rgb(255,255,255,0.9)] bg-white p-6">
        <Title className="uppercase text-black font-semibold">
          {smallTitle}
        </Title>
        <Title size="md" className={` ${textColor} uppercase `}>
          {largeTitle}
        </Title>
        <ReactMarkDown className="text-black my-6">{body}</ReactMarkDown>
        <a
          href={link}
          target="_blank"
          className="uppercase font-medium mt-6 text-black text-sm hover:text-pink font-semibold find-out-more md:cursor-pointer "
        >
          <span className="font-bold">find out more</span>{" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-pink find-out-more-chevron"
          />
        </a>
      </div>
    </div>
  );
};

export default FeminineHygieneCard;
