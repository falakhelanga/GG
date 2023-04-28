import React from "react";
import Logo from "./Logo";
import { ColoursEnum } from "@/enums/colourEnum";
import GynaguardLogo from "./GynaguardLogo";

const GynaguardProductRangeHeading = ({
  color = ColoursEnum["GGPink"],
}: {
  color: ColoursEnum;
}) => {
  return (
    <div className="flex max-sm:flex-col max-sm:items-center gap-3 items-end justify-center md:my-12 my-5">
      <GynaguardLogo color={color} />
      <h1
        style={{ color }}
        className=" font-medium md:text-[2.5em] text-4xl uppercase  flex items-end h-full leading-10"
      >
        product range
      </h1>
    </div>
  );
};

export default GynaguardProductRangeHeading;
