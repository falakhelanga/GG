import React, { Fragment, useMemo } from "react";
import ContentWrap from "./ContentWrap";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/pro-solid-svg-icons";
import { useMenu } from "@/context/menu";
import { Transition } from "@headlessui/react";
import ProductRange from "../navigation/nav/flyout/ProductRange";
import Link from "next/link";
import MegaMenu from "../navigation/nav/MegaMenu";
import BurgerMenu from "../navigation/nav/flyout/BurgerMenu";
import MobileBurgerMenu from "../navigation/nav/flyout/MobileBurgerMenu";

const NavBar = () => {
  const menu = useMenu();
  const {
    arcticlesRef,
    scrollToSection,
    feminineHygieneRef,
    productsRef,
    promiseRef,
  } = menu;
  const NAV_ITEMS = useMemo(
    () => [
      {
        lightText: "what is",
        boldText: "feminine hygiene?",
        link: feminineHygieneRef,
      },
      {
        lightText: "our",
        boldText: "promise",
        link: promiseRef,
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
            >
              <div className="text-[#f5f5f5]  ">
                <span className="">Product</span>
              </div>
              <div className="font-bold uppercase ">Range</div>
            </div>
            <div className="hidden md:block">
              <MegaMenu menu={menu} index={0}>
                <ProductRange />
              </MegaMenu>
            </div>
          </Link>

          {NAV_ITEMS.map((item, idx) => {
            return (
              <div
                // href={item.link}
                onClick={() => {
                  scrollToSection(item.link);
                }}
                onMouseEnter={menu.hideMenu}
                key={idx}
                className="flex flex-col items-start text-white  uppercase md:cursor-pointer"
              >
                <div className="text-[#f5f5f5]">{item.lightText}</div>
                <div className="font-bold">{item.boldText}</div>
              </div>
            );
          })}
          <div
            onClick={() => {
              scrollToSection(arcticlesRef);
            }}
            className="flex flex-col items-start text-white cursor-pointer  "
          >
            <div className="text-[#f5f5f5] ">
              <span>Free to</span>{" "}
              <span className="font-paul lowercase  ">just be</span>
            </div>
            <div className="font-bold uppercase">hub</div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div
            onClick={() => {
              console.log(menu.menuIndex);
              if (menu.menuIndex === 1) {
                menu.showMenu(-1);
              } else {
                menu.showMenu(1);
                menu.lockMenu(true);
              }
            }}
          >
            <div className="w-16 h-16 flex justify-center items-center">
              <FontAwesomeIcon
                icon={menu.menuIndex === 1 ? faClose : faBars}
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

        {/* Mobile */}
        <div className="md:hidden block">
          <div
            onClick={() => {
              if (menu.menuIndex === 2) {
                menu.showMenu(-1);
                menu.showMobileMegaMenu(-1);
              } else {
                menu.showMenu(2);
                menu.lockMenu(true);
              }
            }}
          >
            <div className="w-16 h-16 flex justify-center items-center">
              <FontAwesomeIcon
                icon={menu.menuIndex === 2 ? faClose : faBars}
                color="white"
                size="xl"
                className="md:cursor-pointer"
              />
            </div>
          </div>

          <MegaMenu menu={menu} index={2} mouseLeave={false}>
            <MobileBurgerMenu />
          </MegaMenu>
        </div>
      </ContentWrap>
    </div>
  );
};

export default NavBar;
