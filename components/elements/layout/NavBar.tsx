import React, { Fragment } from "react";
import ContentWrap from "./ContentWrap";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/pro-solid-svg-icons";
import { useMenu } from "@/context/menu";
import { Transition } from "@headlessui/react";
import ProductRange from "../navigation/nav/flyout/ProductRange";
import Link from "next/link";
import MegaMenu from "../navigation/nav/desktop/MegaMenu";
import BurgerMenu from "../navigation/nav/flyout/BurgerMenu";

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
    <div className="bg-pink w-full h-[10vh] fixed top-0 right-0 left-0 flex items-center z-[100]">
      <ContentWrap className="flex justify-between items-center">
        <div onMouseEnter={menu.hideMenu}>
          <Logo />
        </div>
        <div className="md:flex md:gap-[5rem] hidden text-sm">
          <Link href="/products-range" className="z-0">
            <div
              className="flex flex-col items-start text-white uppercase cursor-pointer"
              onMouseEnter={() => {
                menu.showMenu(0);
              }}
              // onClick={() => {
              //   menu.lockMenu(0);
              // }}
            >
              <div className="text-[#f5f5f5] ">
                <span className="">Product</span>
              </div>
              <div className="font-bold uppercase">Range</div>
            </div>
            <MegaMenu menu={menu} index={0}>
              <ProductRange />
            </MegaMenu>
          </Link>

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
        <div>
          <div
            onClick={() => {
              console.log(menu.menuIndex);
              if (menu.menuIndex === true) {
                menu.showMenu(-1);
              } else {
                menu.showMenu(1);
                menu.lockMenu(true);
              }
            }}
          >
            <div className="w-16 h-16 flex justify-center items-center">
              <FontAwesomeIcon
                icon={menu.menuIndex === true ? faClose : faBars}
                color="white"
                size="xl"
                className="md:cursor-pointer"
              />
            </div>
          </div>

          <MegaMenu menu={menu} index={1} mouseLeave={false}>
            <BurgerMenu />
          </MegaMenu>
        </div>
      </ContentWrap>
    </div>
  );
};

export default NavBar;
