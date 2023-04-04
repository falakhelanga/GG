import GynaguardPromise from "@/components/elements/GynaguardPromise/GynaguardPromise";
import Logo from "@/components/elements/Logo";
import ContentWrap from "@/components/elements/layout/ContentWrap";
import ProductsRange from "@/components/sections/products-range/ProductsRange";
import Reviews from "@/components/sections/products-range/Reviews";
import Tips from "@/components/sections/products-range/Tips";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const links = [
  {
    name: "comfort",
    link: "comfort",
    text: `Gentle enough for everyday use to support a healthy, ideal pH
      balance for ultimate comfort in the v-zone`,
    index: -1,
  },
  {
    name: "control",
    link: "control",
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum adipisci quidem sint expedita soluta molestiae.",
    index: 0,
  },
  {
    name: "intimate",
    link: "intimate",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum adipisci quidem sint expedita soluta molestiae.",
    index: 1,
  },
];

const sliderWidth = 7;
const ProductRangePage = () => {
  const router = useRouter();
  const { page } = router.query;
  const description = links.find((link) => link.link === page) || links[0];
  const [sliderPosition, setSliderPosition] = useState(0);
  const [slideCurrentIndex, setSlideCurrentIndex] = useState(1);
  const [activeTab, setActiveTab] = useState(1);

  const moveSlider = (index: number) => {
    setSliderPosition(190 * index);
  };
  ////// set tab index on page mount
  useEffect(() => {
    if (router.isReady) {
      const tab = links.find((link) => link.link === page);
      if (tab) {
        setSlideCurrentIndex(tab.index);
        setActiveTab(tab.index);
      } else {
        setSlideCurrentIndex(-1);
        setActiveTab(-1);
      }
    }
  }, [router, page]);

  /////// move the tab slider when the index change
  useEffect(() => {
    moveSlider(slideCurrentIndex);
  }, [slideCurrentIndex]);
  return (
    <>
      <Head>
        <title>Product Range</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex flex-col items-center mt-[6rem]  ">
        <div className="flex max-sm:flex-col max-sm:items-center gap-3 items-end justify-center md:my-12 my-5">
          <Logo color="pink" height={300} width={300} />
          <h1 className="text-pink font-medium md:text-[2.5em] text-4xl uppercase  flex items-end h-full leading-10">
            product range
          </h1>
        </div>
        <div className="flex flex-col w-full ">
          <div className="flex flex-col uppercase w-full   items-center max-sm:text-center text-black md:text-lg text-md border-b border-b-green  ">
            <div className="flex max-sm:gap-4  ">
              {links.map((item, idx) => {
                return (
                  <Link
                    key={item.name}
                    href={`?page=${item.name}`}
                    onMouseEnter={() => {
                      setSlideCurrentIndex(item.index);
                      // if (router.route === item.link) return;
                    }}
                    onMouseLeave={() => {
                      setSlideCurrentIndex(activeTab);
                    }}
                    className={`hover:text-green ${
                      page === item.link &&
                      "max-sm:border-b max-sm:border-b-green max-sm:border-b-8"
                    } ${
                      !page &&
                      idx === 0 &&
                      "max-sm:border-b max-sm:border-b-green max-sm:border-b-8 "
                    } relative md:px-12 px-5 `}
                    scroll={false}
                  >
                    <span
                      className={`font-bold ${
                        page === item.link && "text-green"
                      } ${!page && idx === 0 && "text-green"} `}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div
              style={{
                transform: `translateX(${sliderPosition}px)`,
                width: `${sliderWidth}rem`,
              }}
              className="bg-green h-2 transition-all duration-700 ease-out md:block hidden"
            ></div>
          </div>
          <div className="text-brown text-center my-5">{description.text}</div>
        </div>

        {/* products range */}
        <ContentWrap className="mt-14">
          <ProductsRange />
          <div className="mt-16">
            <Reviews />
          </div>
        </ContentWrap>
        <div className="bg-gradient-to-b from-[#E9E7E6] to-[#E7D4DB] w-full py-8 mt-14">
          <Tips />
        </div>
        <GynaguardPromise />
      </div>
    </>
  );
};

export default ProductRangePage;
