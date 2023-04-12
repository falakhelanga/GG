import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useMemo } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useMenu } from "@/context/menu";

const MobileBurgerMenu = () => {
  const menu = useMenu();
  const {
    arcticlesRef,

    scrollToMobileSection,
    feminineHygieneRef,
    productsRef,
    promiseRef,
  } = menu;

  const NAV_ITEMS = useMemo(
    () => [
      {
        lightText: "what is",
        boldText: "feminine hygiene?",
        link: "feminine",
      },
      {
        lightText: "our",
        boldText: "promise",
        link: "promise",
      },
      // {
      //   lightText: "free to just be",
      //   boldText: "hub",
      //   link: "#",
      // },
    ],
    [feminineHygieneRef, promiseRef]
  );

  return (
    <div className="absolute bg-pink bg-opacity-90 z-[100] w-full h-screen ">
      <div className="flex p-7">
        <div className="mx-auto w-full max-w-7xl  flex justify-start">
          <div className=" space-y-10">
            <Link href={"/#"} className="w-64">
              <div className="text-[#f5f5f5] ">
                <span className="">Product</span>
              </div>
              <div className="font-bold uppercase text-[#f5f5f5] ">Range</div>
            </Link>
            {NAV_ITEMS.map((item, idx) => {
              return (
                <Link
                  href={`/?section=${item.link}`}
                  onClick={() => {
                    menu.hideMenu();
                  }}
                  key={idx}
                  className="flex flex-col items-start text-white  uppercase md:cursor-pointer"
                >
                  <div className="text-[#f5f5f5]">{item.lightText}</div>
                  <div className="font-bold">{item.boldText}</div>
                </Link>
              );
            })}
            <Link
              href="/?section=hub"
              onClick={() => {
                menu.hideMenu();
              }}
              className="flex flex-col items-start text-white md:cursor-pointer  "
            >
              <div className="text-[#f5f5f5] ">
                <span>Free to</span>
                <span className="font-paul lowercase  ">just be</span>
              </div>
              <div className="font-bold uppercase">hub</div>
            </Link>
            <Link
              href={"/#"}
              className="flex flex-col items-start text-white  uppercase md:cursor-pointer"
            >
              <div className="text-[#f5f5f5]">Frequently</div>
              <div className="font-bold">Asked Questions</div>
            </Link>
            <Link
              href={"/#"}
              className="flex flex-col items-start text-white  uppercase md:cursor-pointer"
            >
              <div className="text-[#f5f5f5]">About</div>
              <div className="font-bold">Gynaguard</div>
            </Link>
            <Link
              href={"/#"}
              className="flex flex-col items-start text-white  uppercase md:cursor-pointer"
            >
              <div className="text-[#f5f5f5]">Contact</div>
              <div className="font-bold">Us</div>
            </Link>
            <Link
              href={"/#"}
              className="flex flex-col items-start text-white  uppercase md:cursor-pointer"
            >
              <div className="text-[#f5f5f5]">Terms of</div>
              <div className="font-bold">Use</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBurgerMenu;
