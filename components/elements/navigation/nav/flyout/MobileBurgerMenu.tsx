import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { Fragment, useEffect, useMemo } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useMenu } from "@/context/menu";
import MegaMenu from "../MegaMenu";
import ProductsRange from "@/components/sections/products-range/ProductsRange";
import MobileMegaMenu from "../MobileMegaMenu";
import { faBars, faClose } from "@fortawesome/pro-solid-svg-icons";
import { useSubCategories } from "@/context/subCategories";
import { ProductType } from "@/types/products";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const linksVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const linksMegaMenuVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

const productsFormatter = (products: any): ProductType[] => {
  return products?.data.map((item: any) => ({
    ...item.attributes,
    id: item.id,
  })) as ProductType[];
};
interface MobileBurgerMenuPropTypes {
  setShowMobileBurgerMenu: (value: React.SetStateAction<boolean>) => void;
}

const MobileBurgerMenu = ({
  setShowMobileBurgerMenu,
}: MobileBurgerMenuPropTypes) => {
  const { subcategories, newProducts } = useSubCategories();
  const router = useRouter();
  const menu = useMenu();
  const {
    arcticlesRef,
    scrollToMobileSection,
    feminineHygieneRef,
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

  const MENU_ITEMS_COL_1: {
    title: string;
    subtitle: string;
    links: Array<{ text: string; link: string }>;
  }[] = subcategories.map((subcategory) => {
    return {
      title: subcategory.name,
      subtitle: subcategory.description,
      links: productsFormatter(subcategory.products).map((product) => ({
        text: product.name,
        link: `/products-range/${product.id}`,
      })),
    };
  });

  return (
    <div className="absolute bg-pink bg-opacity-90 z-[100] w-full h-screen min-h-full overflow-auto ">
      <div className="flex px-7">
        <div className="mx-auto w-full max-w-7xl  flex justify-start">
          <motion.div variants={variants} className=" space-y-10">
            <MobileMegaMenu index={1} menu={menu}>
              <motion.div
                variants={variants}
                className=" py-5 pl-5 overflow-auto"
              >
                <motion.div
                  variants={linksMegaMenuVariants}
                  className="flex justify-between items-center pb-4"
                  onClick={() => menu.hideMobileMegaMenu()}
                >
                  <div className="uppercase">
                    <div className="text-pink">Product</div>
                    <div className="font-bold text-pink">Range</div>
                  </div>
                  <div className="w-16 h-16 flex justify-center items-center mr-5 text-lg">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="md:cursor-pointer text-4xl font-light text-pink"
                    />
                  </div>
                </motion.div>
                {MENU_ITEMS_COL_1.map(({ title, subtitle, links }, idx) => {
                  return (
                    <motion.div
                      variants={linksMegaMenuVariants}
                      key={idx}
                      className=" space-y-1 pb-7"
                    >
                      <div className="uppercase font-bold text-gray-500 text-sm ">
                        {title}
                      </div>
                      <div className="text-gray-700 text-sm">{subtitle}</div>
                      <div className="">
                        {links.map(({ text, link }, idx) => {
                          return (
                            <Link
                              href={{
                                pathname: "/",
                                query: { ...router.query, section: link },
                              }}
                              key={idx}
                              onClick={() => setShowMobileBurgerMenu(false)}
                              className="text-gray-700 hover:text-pink py-3 space-x-3  leading-[2rem] text-sm"
                            >
                              <div>
                                <FontAwesomeIcon
                                  icon={faAngleRight}
                                  className="text-pink pr-2"
                                />
                                {text}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
                <motion.div variants={linksMegaMenuVariants}>
                  <Link
                    onClick={() => setShowMobileBurgerMenu(false)}
                    href={"/products-range"}
                    className="w-64 space-y-1 pb-5"
                  >
                    <div className="uppercase font-bold text-gray-500 hover:text-pink cursor-pointer">
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="text-pink pr-2"
                      />
                      All Products
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            </MobileMegaMenu>
            <motion.div
              variants={linksVariants}
              className="flex flex-col items-start text-white bg-opacity-5 uppercase md:cursor-pointer"
              onClick={() => {
                if (menu.mobileMenuIndex === 1) {
                  menu.hideMobileMegaMenu();
                } else {
                  menu.showMobileMegaMenu(1);
                }
              }}
            >
              <div className="text-[#f5f5f5] uppercase">Product</div>
              <div className="font-bold uppercase">Range</div>
            </motion.div>

            {NAV_ITEMS.map((item, idx) => {
              return (
                <motion.div variants={linksVariants} key={idx}>
                  <Link
                    href={`/?section=${item.link}`}
                    onClick={() => setShowMobileBurgerMenu(false)}
                    className="flex flex-col items-start text-white  uppercase md:cursor-pointer"
                  >
                    <div className="text-[#f5f5f5]">{item.lightText}</div>
                    <div className="font-bold">{item.boldText}</div>
                  </Link>
                </motion.div>
              );
            })}
            <motion.div variants={linksVariants}>
              <Link
                href="/?section=hub"
                onClick={() => setShowMobileBurgerMenu(false)}
                className="flex flex-col items-start text-white md:cursor-pointer  "
              >
                <div className="text-[#f5f5f5] ">
                  <span>Free to</span>
                  <span className="font-paul lowercase  ">just be</span>
                </div>
                <div className="font-bold uppercase">hub</div>
              </Link>
            </motion.div>
            <motion.div variants={linksVariants}>
              <Link
                onClick={() => setShowMobileBurgerMenu(false)}
                href={"/#"}
                className="flex flex-col items-start text-white  uppercase md:cursor-pointer"
              >
                <div className="text-[#f5f5f5]">Frequently</div>
                <div className="font-bold">Asked Questions</div>
              </Link>
            </motion.div>
            <motion.div variants={linksVariants}>
              <Link
                onClick={() => setShowMobileBurgerMenu(false)}
                href={"/#"}
                className="flex flex-col items-start text-white  uppercase md:cursor-pointer"
              >
                <div className="text-[#f5f5f5]">About</div>
                <div className="font-bold">Gynaguard</div>
              </Link>
            </motion.div>
            <motion.div variants={linksVariants}>
              <Link
                onClick={() => setShowMobileBurgerMenu(false)}
                href={"/#"}
                className="flex flex-col items-start text-white  uppercase md:cursor-pointer"
              >
                <div className="text-[#f5f5f5]">Contact</div>
                <div className="font-bold">Us</div>
              </Link>
            </motion.div>
            <motion.div variants={linksVariants}>
              <Link
                onClick={() => setShowMobileBurgerMenu(false)}
                href={"/#"}
                className="flex flex-col items-start text-white  uppercase md:cursor-pointer"
              >
                <div className="text-[#f5f5f5]">Terms of</div>
                <div className="font-bold">Use</div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MobileBurgerMenu;
