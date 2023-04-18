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
    <>
      <div className="hidden md:block fixed top-[6rem] z-[99] right-0 left-0 ">
        <MegaMenu menu={menu} index={0}>
          <ProductRange />
        </MegaMenu>
      </div>

      <div className="bg-pink w-full h-[10vh] fixed top-0 right-0 left-0 flex  z-[100]">
        <ContentWrap className="flex justify-between md:mt-7 max-sm:items-center ">
          <div
            onMouseEnter={menu.hideMenu}
            className="hover:translate-y-[3px] transition ease-in-out transition-duration-[3000ms] cursor-pointer"
          >
            <Logo />
          </div>
          <div className="md:flex  md:gap-[5rem] hidden text-sm">
            <Link href="/products-range" className="z-0 ">
              <div
                className={` transition-all  transition-duration-[3000ms]flex flex-col items-start text-white uppercase md:cursor-pointer   transition-all ease-in   hover:border-b ${
                  router.route === "/products-range" &&
                  " border-b-white border-b-8 border-b "
                }hover:border-b-white hover:border-b-8  h-full nav-link-container`}
                onMouseEnter={() => {
                  menu.showMenu(0);
                }}
              >
                <div
                  className={`nav-link ${
                    router.route === "/products-range" && "translate-y-[3px]"
                  }`}
                >
                  <div className="text-[#f5f5f5]  ">
                    <span className="">Product</span>
                  </div>
                  <div className="font-bold uppercase ">Range</div>
                </div>
              </div>
            </Link>

            {NAV_ITEMS.map((item, idx) => {
              return (
                <Link
                  href={{
                    pathname: "/",
                    query: { ...router.query, section: item.link },
                  }}
                  onMouseEnter={menu.hideMenu}
                  key={idx}
                  className={`flex flex-col items-start text-white  uppercase md:cursor-pointer transition duration-200 transition-all ease-in-out  duration-500 hover:border-b hover:border-b-white hover:border-b-[10px] ${
                    section === item.link &&
                    "border-b border-b-white border-b-[10px] "
                  } nav-link-container`}
                >
                  <div
                    className={`nav-link ${
                      section === item.link && "translate-y-[3px]"
                    }`}
                  >
                    <div className="text-[#f5f5f5]">{item.lightText}</div>
                    <div className="font-bold">{item.boldText}</div>
                  </div>
                </Link>
              );
            })}
            <Link
              href={{
                pathname: "/",
                query: { ...router.query, section: "hub" },
              }}
              className={`flex flex-col items-start text-white md:cursor-pointer  transition duration-200 transition-all ease-in-out  duration-500 hover:border-b hover:border-b-white hover:border-b-8 ${
                section === "hub" && "border-b border-b-white border-b-[10px] "
              } nav-link-container`}
            >
              <div
                className={`nav-link ${
                  section === "hub" && "translate-y-[3px]"
                }`}
              >
                <div className="text-[#f5f5f5]  relative -top-3">
                  <span>Free to</span>{" "}
                  <span className="font-paul lowercase text-3xl ">just be</span>
                </div>
                <div className="font-bold uppercase relative -top-4">hub</div>
              </div>
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
              <div className="w-16 h-16 flex justify-center relative bottom-[0.7rem] items-center hover:translate-y-[3px] transition ease-in transition-duration-[3000ms] cursor-pointer">
                <FontAwesomeIcon
                  icon={menu.menuIndex === 1 ? faClose : faBars}
                  color="white"
                  size="xl"
                  className="md:cursor-pointer"
                />
              </div>
            </div>
            <div className="-mt-6">
              <MegaMenu menu={menu} index={1} mouseLeave={false}>
                <BurgerMenu />
              </MegaMenu>
            </div>
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
    </>
  );
};

export default NavBar;
