import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import WhatsNewCard from "../elements/WhatsNewCard";

const ProductRange = () => {
  const MENU_ITEMS_COL_1: {
    title: string;
    subtitle: string;
    links: Array<{ text: string; link: string }>;
  }[] = [
    {
      title: "essential wash",
      subtitle: "(Odour & irritation control)",
      links: [{ text: "Essential Daily Comfort Intimate Wash", link: "#" }],
    },
    {
      title: "ultimate wash",
      subtitle: "(Odour & irritation control)",
      links: [{ text: "Essential Daily Comfort Intimate Wash", link: "#" }],
    },
  ];

  const MENU_ITEMS_COL_2: {
    title: string;
    subtitle: string | null;
    links: Array<{ text: string; link: string }>;
  }[] = [
    {
      title: "teen washes",
      subtitle: null,
      links: [
        {
          text: "Lightly Fragranced Moisturising Daily Gentle Intimate Body Wash",
          link: "#",
        },
        {
          text: "Lightly Fragranced Moisturising Daily Gentle Intimate Body Wash",
          link: "#",
        },
      ],
    },
    {
      title: "foam baths",
      subtitle: null,
      links: [
        {
          text: "Lightly Fragranced Foam Bath",
          link: "#",
        },
        {
          text: "Fragrance Free Foam Bath",
          link: "#",
        },
      ],
    },
  ];

  const MENU_ITEMS_COL_3: {
    title: string;
    subtitle: string | null;
    links: Array<{ text: string; link: string }>;
  }[] = [
    {
      title: "comfort range",
      subtitle: null,
      links: [
        {
          text: "Intimate cleansing pH Bar",
          link: "#",
        },
        {
          text: "Unscented Regular Pantyliners",
          link: "#",
        },
        {
          text: "Daily Comfort Sensitive Wipes",
          link: "#",
        },
      ],
    },
    {
      title: "lubricant",
      subtitle: null,
      links: [
        {
          text: "Lubricating Moisturising Gel",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="absolute w-screen bg-white bg-opacity-90 z-[100] mt-[2.9vh] ">
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
            <Link href={"/#"} className="w-64 space-y-1 pb-5">
              <div className="uppercase font-bold text-gray-500 hover:text-pink cursor-pointer">
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
        <div className="grid grid-cols-2">
          <WhatsNewCard
            title={"Unscented Regular Pantyliners"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquatempor incididunt ut labore et dolore magna aliqua..."
            }
          />
          <WhatsNewCard
            title={"Unscented Regular Pantyliners"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquatempor incididunt ut labore et dolore magna aliqua..."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductRange;
