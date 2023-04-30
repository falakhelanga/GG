import React from "react";
import { AmperSandComponent } from "./AmperSandComponent";
import { ColoursEnum } from "@/enums/colourEnum";

const WhoAreWe = ({ color }: { color: ColoursEnum }) => {
  console.log(color, "color");
  return (
    <>
      <div
        style={{ color: ColoursEnum[color.color] }}
        className="md:flex w-full md:mb-8 mb-8  uppercase justify-center md:text-[2.5em] text-4xl items-center hidden"
      >
        <span>Who are we</span>{" "}
        <AmperSandComponent
          color={ColoursEnum[color.color]}
          className=" md:w-[2.5rem] md:h-[2.5rem] md:mx-5 mx-2 w-[1.4rem] h-[1.5rem]"
        />{" "}
        <span>What we do</span>
      </div>
      <div
        style={{ color: ColoursEnum[color.color] }}
        className="md:hidden w-full md:mb-8 mb-8  uppercase justify-center md:text-[2.5em] text-4xl items-center flex flex-col items-center"
      >
        <span>Who are we</span>{" "}
        <div className="flex items-center">
          <AmperSandComponent
            color={ColoursEnum[color.color]}
            className=" md:w-[2.5rem] md:h-[2.5rem] md:mx-5 mx-2 w-[1.8rem] h-[1.8rem]"
          />{" "}
          <span>What we do</span>
        </div>
      </div>
    </>
  );
};

export default WhoAreWe;
