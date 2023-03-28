import React, { Fragment } from "react";
import ContentWrap from "./ContentWrap";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-solid-svg-icons";
import { useMenu } from "@/context/menu";
import { Transition } from "@headlessui/react";
import ProductRange from "../navigation/nav/flyout/ProductRange";
import Link from "next/link";
const NAV_ITEMS = [
  {
    lightText: "what is",
    boldText: "feminine hygiene?",
    link: "#",
  },
  {
    lightText: "our",
    boldText: "promise",
    link: "#",
  },
  // {
  //   lightText: "free to just be",
  //   boldText: "hub",
  //   link: "#",
  // },
];

const NavBar = () => {
  const menu = useMenu();

  return (
    <div className="bg-pink w-full h-[10vh] fixed top-0 right-0 left-0 flex items-center z-[10]">
      <ContentWrap className="flex justify-between items-center">
        <div onMouseEnter={menu.hideMenu}>
          <Logo />
        </div>
        <div className="md:flex md:gap-[5rem] hidden text-sm">
          <div className="">
            <div
              className="flex flex-col items-start text-white uppercase cursor-pointer"
              onMouseEnter={() => {
                menu.showMenu();
              }}
              onClick={() => {
                menu.lockMenu();
              }}
            >
              <div className="text-[#f5f5f5] ">
                <span className="">Product</span>
              </div>
              <div className="font-bold uppercase">Range</div>
            </div>
            <Transition
              as={Fragment}
              show={menu.menuOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <div
                className="absolute left-1/2 transform -translate-x-1/2 px-2 w-screen sm:px-0"
                onMouseLeave={() => {
                  menu.unlockAndHideMenu();
                }}
              >
                <div
                  className="absolute mt-7 w-screen bg-white"
                  onMouseLeave={() => menu.hideMenu()}
                >
                  <ProductRange />
                </div>
              </div>
            </Transition>
          </div>
          {NAV_ITEMS.map((item, idx) => {
            return (
              <Link
                href={item.link}
                onMouseEnter={menu.hideMenu}
                key={idx}
                className="flex flex-col items-start text-white  uppercase"
              >
                <div className="text-[#f5f5f5]">{item.lightText}</div>
                <div className="font-bold">{item.boldText}</div>
              </Link>
            );
          })}
          <Link href={"#"} className="flex flex-col items-start text-white  ">
            <div className="text-[#f5f5f5] ">
              <span>Free to</span>{" "}
              <span className="font-paul lowercase  ">just be</span>
            </div>
            <div className="font-bold uppercase">hub</div>
          </Link>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          color="white"
          size="xl"
          className="md:cursor-pointer"
        />
      </ContentWrap>
    </div>
  );
};

export default NavBar;
