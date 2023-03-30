import Title from "@/components/elements/Title";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";

interface FeminineHygieneCardPropType {
  color: "lightPink" | "lightGreen" | "lightBrown";
  body: string;
  title: string;
  className?: string;
}

const FeminineHygieneCard = ({
  color,
  body,
  title,
  className,
}: FeminineHygieneCardPropType) => {
  const bgColor = useMemo(() => {
    if (color === "lightBrown") {
      return "bg-lightBrown";
    }
    if (color === "lightPink") {
      return "bg-lightPink";
    }
    if (color === "lightGreen") {
      return "bg-lightGreen";
    }
  }, [color]);
  const textColor = useMemo(() => {
    if (color === "lightBrown") {
      return "text-lightBrown";
    }
    if (color === "lightPink") {
      return "text-lightPink";
    }
    if (color === "lightGreen") {
      return "text-lightGreen";
    }
  }, [color]);

  return (
    <div className={` ${className} `}>
      <div className={`${bgColor} w-full h-10 rounded-t-md `}></div>
      <div className="md:bg-[rgb(255,255,255,0.9)] bg-white p-6">
        <Title className="uppercase text-black font-semibold">
          feminine hygiene for
        </Title>
        <Title size="md" className={` ${textColor} uppercase `}>
          {title}
        </Title>
        <div className="text-black my-6">{body}</div>
        <div className="uppercase font-medium mt-6 text-black text-sm hover:text-pink font-semibold find-out-more cursor-pointer ">
          <span className="">find out more</span>{" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-pink find-out-more-chevron"
          />
        </div>
      </div>
    </div>
  );
};

export default FeminineHygieneCard;
