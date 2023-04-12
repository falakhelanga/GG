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
import { useRouter } from "next/router";

const NavBar = () => {
  const menu = useMenu();
  const {
    arcticlesRef,

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
  const router = useRouter();
  const { section } = router.query;
  return (
    <div className="bg-pink w-full h-[10vh] fixed top-0 right-0 left-0 flex  z-[100]">
      <ContentWrap className="flex justify-between md:mt-7 max-sm:items-center ">
        <div onMouseEnter={menu.hideMenu}>
          <Logo />
        </div>
        <div className="md:flex  md:gap-[5rem] hidden text-sm">
          <Link href="/products-range" className="z-0 ">
            <div
              className="flex flex-col items-start text-white uppercase md:cursor-pointer transition duration-200 transition-all ease-in-out  duration-500 hover:border-b hover:border-b-white hover:border-b-8  h-full"
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
              <Link
                href={`/?section=${item.link}`}
                onMouseEnter={menu.hideMenu}
                key={idx}
                className={`flex flex-col items-start text-white  uppercase md:cursor-pointer transition duration-200 transition-all ease-in-out  duration-500 hover:border-b hover:border-b-white hover:border-b-[10px] ${
                  section === item.link &&
                  "border-b border-b-white border-b-[10px] "
                } `}
              >
                <div className="text-[#f5f5f5]">{item.lightText}</div>
                <div className="font-bold">{item.boldText}</div>
              </Link>
            );
          })}
          <Link
            href="/?section=hub"
            className={`flex flex-col items-start text-white md:cursor-pointer  transition duration-200 transition-all ease-in-out  duration-500 hover:border-b hover:border-b-white hover:border-b-8 ${
              section === "hub" && "border-b border-b-white border-b-[10px] "
            } `}
          >
            <div className="text-[#f5f5f5] ">
              <span>Free to</span>{" "}
              <span className="font-paul lowercase  ">just be</span>
            </div>
            <div className="font-bold uppercase">hub</div>
          </Link>
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
              console.log(menu.menuIndex);
              if (menu.menuIndex === 2) {
                menu.showMenu(-1);
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
