import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const BurgerMenu = () => {
  return (
    <div className="absolute w-screen bg-white bg-opacity-90 z-[100] mt-[1.5vh] md:block hidden ">
      <div className="flex p-7">
        <div className="mx-auto w-full max-w-7xl px-16 flex justify-end">
          <div className="">
            <Link href={"/#"} className="w-64">
              <div className="uppercase font-bold text-gray-500 hover:text-pink md:cursor-pointer flex py-1 justify-end items-center">
                FAQ
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-pink pl-2"
                />
              </div>
            </Link>
            <Link href={"/#"} className="w-64 space-y-1 pb-5">
              <div className="uppercase font-bold text-gray-500 hover:text-pink md:cursor-pointer flex py-1 justify-end items-center">
                About Gynaguard
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-pink pl-2"
                />
              </div>
            </Link>
            <Link href={"/#"} className="w-64 space-y-1 pb-5">
              <div className="uppercase font-bold text-gray-500 hover:text-pink md:cursor-pointer flex py-1 justify-end items-center">
                Contact Us
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-pink pl-2"
                />
              </div>
              <div className="uppercase font-bold text-gray-500 hover:text-pink md:cursor-pointer flex py-1 justify-end items-center">
                Terms of use
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-pink pl-2"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
