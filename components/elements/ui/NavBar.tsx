import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import ContentWrap from "./ContentWrap";
import Logo from "./Logo";
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
import { motion, AnimatePresence } from "framer-motion";
import useClickOutside from "@/hooks/useClickOutSide";
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 1, y: -180 },
};
const mobileMenuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: -700 },
  // transition: { type: "spring", stiffness: 100 },
};

const NavBar = () => {
  const menu = useMenu();
  const {
    arcticlesRef,

    feminineHygieneRef,
    productsRef,
    promiseRef,
  } = menu;

  const [activeTabIndex, setActiveTabIndex] = useState<string | null>(null);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const [showWhiteLine, setShowWhiteLine] = useState(false);
  const tabsRef = useRef<any>([]);

  useEffect(() => {
    function setTabPosition() {
      if (!activeTabIndex) return;
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  const NAV_ITEMS = useMemo(
    () => [
      {
        lightText: "what is",
        boldText: "feminine hygiene?",
        link: "feminine",
        idx: 1,
      },
      {
        lightText: "our",
        boldText: "promise",
        link: "promise",
        idx: 2,
      },
    ],
    [feminineHygieneRef, promiseRef]
  );
  const router = useRouter();
  const { section } = router.query;
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [showMobileBurgerMenu, setShowMobileBurgerMenu] = useState(false);
  const burgerMenuRef = useRef(null);
  useClickOutside(burgerMenuRef, () => setShowBurgerMenu(false));
  return (
    <>
      <div className="hidden md:block fixed top-[9vh] z-[99] right-0 left-0 ">
        <MegaMenu menu={menu} index={0}>
          <ProductRange />
        </MegaMenu>
      </div>
      <div
        // ref={burgerMenuRef}
        className="hidden md:block fixed top-[8vh]  z-[99] right-0 left-0"
      >
        <motion.div
          animate={showBurgerMenu ? "open" : "closed"}
          variants={variants}
          initial="closed"
          transition={{
            type: "just",
          }}
        >
          <BurgerMenu />
        </motion.div>
      </div>
      <div className="bg-pink w-full h-[10vh] fixed top-0 right-0 left-0 flex  z-[100]">
        <ContentWrap className="flex justify-between  max-sm:items-center  h-full ">
          <div
            onMouseEnter={menu.hideMenu}
            className="hover:translate-y-[3px]  flex items-center transition ease-in-out transition-duration-[3000ms] cursor-pointer"
          >
            <Logo />
          </div>
          <div
            onMouseEnter={() => {
              setShowWhiteLine(true);
            }}
            onMouseLeave={() => {
              setShowWhiteLine(false);
              setActiveTabIndex(null);
            }}
            className="relative  flex items-center overflow-hidden"
          >
            <div className="md:flex   md:gap-[5rem] hidden text-sm">
              <Link
                onMouseEnter={() => {
                  setActiveTabIndex("/products-range");
                  menu.showMenu(0);
                }}
                ref={(el) => (tabsRef.current["/products-range"] = el)}
                href="/products-range"
                className="z-0  "
              >
                <div
                  className={`  justify-center  transition-all  transition-duration-[3000ms] flex flex-col items-start text-white uppercase md:cursor-pointer   transition-all ease-in     h-full nav-link-container`}
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
                    ref={(el) => (tabsRef.current[item.link] = el)}
                    href={{
                      pathname: "/",
                      query: { ...router.query, section: item.link },
                    }}
                    onMouseEnter={() => {
                      setActiveTabIndex(item.link);
                      menu.hideMenu();
                    }}
                    key={idx}
                    className={`justify-center flex flex-col items-start text-white  uppercase md:cursor-pointer transition duration-200 transition-all ease-in-out  duration-500  nav-link-container`}
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
                ref={(el) => (tabsRef.current["hub"] = el)}
                onMouseEnter={() => {
                  setActiveTabIndex("hub");
                  menu.hideMenu();
                }}
                href={{
                  pathname: "/",
                  query: { ...router.query, section: "hub" },
                }}
                className={` justify-center flex flex-col items-start text-white md:cursor-pointer  transition duration-200 transition-all ease-in-out  duration-500   nav-link-container`}
              >
                <div
                  className={`nav-link  ${
                    section === "hub" && "translate-y-[3px]"
                  }`}
                >
                  <div className="text-[#f5f5f5]  relative ">
                    <span>Free to</span>{" "}
                    <span className="font-paul lowercase text-3xl ">
                      just be
                    </span>
                  </div>
                  <div className="font-bold uppercase relative top-[-7px]">
                    hub
                  </div>
                </div>
              </Link>
            </div>

            {(section || router.route === "/products-range") && (
              <span
                style={{
                  left:
                    tabsRef?.current[
                      router.route === "/products-range"
                        ? "/products-range"
                        : (section as string)
                    ]?.offsetLeft ?? 0,
                  width:
                    tabsRef?.current[
                      router.route === "/products-range"
                        ? "/products-range"
                        : (section as string)
                    ]?.clientWidth ?? 0,
                }}
                className={`absolute  block h-3 bottom-0 bg-white transition-all duration-300 `}
              />
            )}
            <span
              style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
              className={`absolute  block h-3 bg-white transition-all duration-300 ${
                showWhiteLine ? "bottom-[0rem]" : "-bottom-[1rem]"
              }`}
            />
          </div>

          {/* Desktop */}
          <div className="hidden md:flex   items-center">
            <div
              onClick={() => {
                setShowBurgerMenu((currState) => !currState);
              }}
            >
              <div className="w-16 h-16 flex justify-center  items-center hover:translate-y-[3px] transition ease-in transition-duration-[3000ms] cursor-pointer">
                <FontAwesomeIcon
                  icon={showBurgerMenu ? faClose : faBars}
                  color="white"
                  size="xl"
                  className="md:cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden block">
            <div
              onClick={() => {
                menu.hideMobileMegaMenu();
                setShowMobileBurgerMenu((currState) => !currState);
              }}
            >
              <div className="w-16 h-16 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={showMobileBurgerMenu ? faClose : faBars}
                  color="white"
                  size="xl"
                  className="md:cursor-pointer"
                />
              </div>
            </div>

            <AnimatePresence>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                transition={{
                  type: "just",
                }}
                className="absolute  transform right-0 left-0 w-screen sm:px-0 p-0 z-0"
                variants={mobileMenuVariants}
                animate={showMobileBurgerMenu ? "open" : "closed"}
              >
                <div className="absolute z-0 w-screen bg-white">
                  <MobileBurgerMenu
                    setShowMobileBurgerMenu={setShowMobileBurgerMenu}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ContentWrap>
      </div>
    </>
  );
};

export default NavBar;
