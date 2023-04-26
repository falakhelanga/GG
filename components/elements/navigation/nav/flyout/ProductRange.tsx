import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import WhatsNewCard from "../elements/WhatsNewCard";
import { useSubCategories } from "@/context/subCategories";
import { ProductType } from "@/types/products";
import { motion } from "framer-motion";

const productsFormatter = (products: any): ProductType[] => {
  return products?.data.map((item: any) => ({
    ...item.attributes,
    id: item.id,
  })) as ProductType[];
};

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
const ProductRange = ({ menu }: { menu: any }) => {
  const { subcategories, newProducts } = useSubCategories();

  const MENU_ITEMS_COL_1: {
    title: string;
    subtitle: string;
    links: Array<{ text: string; link: string }>;
  }[] = subcategories
    .filter(
      (subcategory) =>
        subcategory.name === "essential wash" ||
        subcategory.name === "ultimate wash"
    )
    .map((item) => ({
      title: item.name,
      links: productsFormatter(item.products).map((product) => ({
        text: product.name,
        link: `/products-range/${product.id}`,
      })),
      subtitle: item.description || "",
    }));

  const MENU_ITEMS_COL_2: {
    title: string;
    subtitle: string;
    links: Array<{ text: string; link: string }>;
  }[] = subcategories
    .filter(
      (subcategory) =>
        subcategory.name === "teen washes" || subcategory.name === "foam baths"
    )
    .map((item) => ({
      title: item.name,
      links: productsFormatter(item.products).map((product) => ({
        text: product.name,
        link: `/products-range/${product.id}`,
      })),
      subtitle: item.description || "",
    }));

  const MENU_ITEMS_COL_3: {
    title: string;
    subtitle: string;
    links: Array<{ text: string; link: string }>;
  }[] = subcategories
    .filter(
      (subcategory) =>
        subcategory.name === "comfort range" || subcategory.name === "lubricant"
    )
    .map((item) => ({
      title: item.name,
      links: productsFormatter(item.products).map((product) => ({
        text: product.name,
        link: `/products-range/${product.id}`,
      })),
      subtitle: item.description || "",
    }));

  return (
    <motion.div
      variants={variants}
      className=" w-screen text-sm bg-white z-[100] mt-[0] shadow-sm "
    >
      <div className="flex p-7">
        <div className="mx-auto w-full max-w-7xl px-8 flex justify-between">
          <div className=" ">
            {MENU_ITEMS_COL_1.map(({ title, subtitle, links }, idx) => {
              return (
                <motion.div
                  variants={linksVariants}
                  key={idx}
                  className="w-64 space-y-1 pb-5"
                >
                  <div className="uppercase font-bold text-gray-500 ">
                    {title}
                  </div>
                  <div className="text-gray-700">{subtitle}</div>
                  <div className="">
                    {links.map(({ text, link }, idx) => {
                      return (
                        <Link
                          onClick={menu.hideMenu}
                          href={link}
                          key={idx}
                          className="text-gray-700 hover:text-pink py-3 space-x-3 max-sm:leading-7 find-out-more "
                        >
                          <div
                            className="flex items-start 
                          "
                          >
                            <FontAwesomeIcon
                              icon={faAngleRight}
                              className="text-pink pr-2 relative top-[0.1rem] "
                            />
                            <span className="find-out-more-chevron   pt-0">
                              {text}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="border-r-[1px] border-l-[1px] px-28 border-gray-400">
            {MENU_ITEMS_COL_2.map(({ title, subtitle, links }, idx) => {
              return (
                <motion.div
                  variants={linksVariants}
                  key={idx}
                  className="w-64 space-y-1 pb-5  "
                >
                  <div className="uppercase font-bold text-gray-500">
                    {title}
                  </div>
                  <div className="text-gray-700">{subtitle}</div>
                  <div className="">
                    {links.map(({ text, link }, idx) => {
                      return (
                        <Link
                          onClick={menu.hideMenu}
                          href={link}
                          key={idx}
                          className="text-gray-700 hover:text-pink max-sm:leading-7 py-3 space-x-3 
                         find-out-more"
                        >
                          <div className="flex items-start  ">
                            <FontAwesomeIcon
                              icon={faAngleRight}
                              className="text-pink pr-2 relative top-[0.1rem] "
                            />
                            <span className="find-out-more-chevron flex items-start ">
                              {text}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div>
            {MENU_ITEMS_COL_3.map(({ title, subtitle, links }, idx) => {
              return (
                <motion.div
                  variants={linksVariants}
                  key={idx}
                  className="w-64 space-y-1 pb-5"
                >
                  <div className="uppercase font-bold text-gray-500">
                    {title}
                  </div>
                  <div className="text-gray-700">{subtitle}</div>
                  <div className="">
                    {links.map(({ text, link }, idx) => {
                      return (
                        <Link
                          onClick={menu.hideMenu}
                          href={link}
                          key={idx}
                          className="text-gray-700 hover:text-pink py-3 space-x-3 max-sm:leading-7 find-out-more"
                        >
                          <div className="flex items-start ">
                            <FontAwesomeIcon
                              icon={faAngleRight}
                              className="text-pink pr-2 relative top-[0.1rem]"
                            />
                            <span className="find-out-more-chevron">
                              {text}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
            <motion.div variants={linksVariants}>
              <Link
                onClick={menu.hideMenu}
                href={"/products-range"}
                className="w-64 space-y-1 pb-5 find-out-more"
              >
                <div className="uppercase font-bold text-gray-500 hover:text-pink md:cursor-pointer flex items-start">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-pink pr-2 relative top-[0.1rem]"
                  />
                  <span className="find-out-more-chevron"> All Products</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl px-8 flex flex-col justify-between pb-10">
        <div className="uppercase font-bold text-green pb-3">
          What&apos;s New
        </div>
        <motion.div
          variants={linksVariants}
          className="grid grid-cols-2 gap-[5rem] "
        >
          {newProducts.map((product) => {
            return (
              <div key={product.id} onClick={menu.hideMenu}>
                <WhatsNewCard
                  id={product.id}
                  image={product.image}
                  title={product.name}
                  text={product.description}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductRange;
