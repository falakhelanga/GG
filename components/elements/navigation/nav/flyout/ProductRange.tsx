import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import WhatsNewCard from "../elements/WhatsNewCard";
import { useSubCategories } from "@/context/subCategories";
import { ProductType } from "@/types/products";

const productsFormatter = (products: any): ProductType[] => {
  return products?.data.map((item: any) => ({
    ...item.attributes,
    id: item.id,
  })) as ProductType[];
};

const ProductRange = () => {
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
    <div className=" w-screen bg-white bg-opacity-90 z-[100] mt-[0]  ">
      <div className="flex p-7">
        <div className="mx-auto w-full max-w-7xl px-8 flex justify-between">
          <div className=" ">
            {MENU_ITEMS_COL_1.map(({ title, subtitle, links }, idx) => {
              return (
                <div key={idx} className="w-64 space-y-1 pb-5">
                  <div className="uppercase font-bold text-gray-500 ">
                    {title}
                  </div>
                  <div className="text-gray-700">{subtitle}</div>
                  <div className="">
                    {links.map(({ text, link }, idx) => {
                      return (
                        <Link
                          href={link}
                          key={idx}
                          className="text-gray-700 hover:text-pink py-3 space-x-3 leading-7"
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
          </div>
          <div className="border-r-2 border-l-2 px-28 border-gray-400">
            {MENU_ITEMS_COL_2.map(({ title, subtitle, links }, idx) => {
              return (
                <div key={idx} className="w-64 space-y-1 pb-5  ">
                  <div className="uppercase font-bold text-gray-500">
                    {title}
                  </div>
                  <div className="text-gray-700">{subtitle}</div>
                  <div className="">
                    {links.map(({ text, link }, idx) => {
                      return (
                        <Link
                          href={link}
                          key={idx}
                          className="text-gray-700 hover:text-pink py-3 space-x-3 leading-7"
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
          </div>
          <div>
            {MENU_ITEMS_COL_3.map(({ title, subtitle, links }, idx) => {
              return (
                <div key={idx} className="w-64 space-y-1 pb-5">
                  <div className="uppercase font-bold text-gray-500">
                    {title}
                  </div>
                  <div className="text-gray-700">{subtitle}</div>
                  <div className="">
                    {links.map(({ text, link }, idx) => {
                      return (
                        <Link
                          href={link}
                          key={idx}
                          className="text-gray-700 hover:text-pink py-3 space-x-3 leading-7"
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
            <Link href={"/products-range"} className="w-64 space-y-1 pb-5">
              <div className="uppercase font-bold text-gray-500 hover:text-pink md:cursor-pointer">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-pink pr-2"
                />
                All Products
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl px-8 flex flex-col justify-between pb-10">
        <div className="uppercase font-bold text-green pb-3">
          What&apos;s New
        </div>
        <div className="grid grid-cols-2 gap-[5rem]">
          {newProducts.map((product) => {
            return (
              <WhatsNewCard
                id={product.id}
                image={product.image}
                key={product.id}
                title={product.name}
                text={product.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductRange;
