import React from "react";
import { AmperSandComponent } from "./AmperSandComponent";
import { ColoursEnum } from "@/enums/colourEnum";

const WhoAreWe = ({ color }: { color: ColoursEnum }) => {
  console.log(color, "color");
  return (
    <div
      style={{ color: ColoursEnum[color.color] }}
      className="flex w-full md:mb-8 mb-8  uppercase justify-center md:text-5xl text-xl items-center"
    >
      <span>Who are we</span>{" "}
      <AmperSandComponent
        color={ColoursEnum[color.color]}
        className=" w-[2.5rem] h-[2.5rem] mx-5"
      />{" "}
      <span>What we do</span>
    </div>
  );
};

export default WhoAreWe;
