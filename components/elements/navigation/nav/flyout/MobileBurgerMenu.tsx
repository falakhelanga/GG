import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { Fragment, useMemo } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useMenu } from "@/context/menu";
import MegaMenu from "../MegaMenu";
import ProductsRange from "@/components/sections/products-range/ProductsRange";
import MobileMegaMenu from "../MobileMegaMenu";
import { faBars, faClose } from "@fortawesome/pro-solid-svg-icons";
import { useSubCategories } from "@/context/subCategories";
import { ProductType } from "@/types/products";

const productsFormatter = (products: any): ProductType[] => {
  return products?.data.map((item: any) => ({
    ...item.attributes,
    id: item.id,
  })) as ProductType[];
};

const MobileBurgerMenu = () => {
  const { subcategories, newProducts } = useSubCategories();

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
      <div className="flex p-7">
        <div className="mx-auto w-full max-w-7xl  flex justify-start">
          <div className=" space-y-10">
            <MobileMegaMenu index={1} menu={menu}>
              <div className=" pt-5 pl-5">
                <div
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
                </div>
                {MENU_ITEMS_COL_1.map(({ title, subtitle, links }, idx) => {
                  return (
                    <div key={idx} className=" space-y-1 pb-7">
                      <div className="uppercase font-bold text-gray-500 text-sm ">
                        {title}
                      </div>
                      <div className="text-gray-700 text-sm">{subtitle}</div>
                      <div className="">
                        {links.map(({ text, link }, idx) => {
                          return (
                            <Link
                              href={link}
                              key={idx}
                              onClick={() => menu.hideMenu()}
                              className="text-gray-700 hover:text-pink py-3 space-x-3 leading-5 text-sm"
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
                    </div>
                  );
                })}
                <Link
                  onClick={() => menu.hideMenu()}
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
              </div>
            </MobileMegaMenu>
            <div
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
            </div>

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
