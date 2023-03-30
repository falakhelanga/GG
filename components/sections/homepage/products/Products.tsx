import React, { useState } from "react";
import Product from "./Product";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import * as ReactDOMServer from "react-dom/server";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/pro-solid-svg-icons";
import Image from "next/image";

const Products = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const pagination = {
    el: ".my-custom-pagination-div",
    clickable: true,
    renderBullet: function (index, className) {
      return ReactDOMServer.renderToStaticMarkup(
        <div className="bg-pink h-4 w-4 flex gap-4 rounded-full"></div>
      );
    },
  };
  return (
    <div className=" relative">
      <div
        className=" absolute top-[20%] left-[15rem] z-[3] cursor-pointer md:block hidden "
        ref={(node) => setPrevEl(node)}
      >
        <Image
          alt="arrow-left"
          src="/images/slider_arrows_left.svg"
          height={70}
          width={70}
        />
      </div>

      <div
        ref={(node) => setNextEl(node)}
        className=" absolute top-[20%] right-[15rem] z-[3] cursor-pointer md:block hidden"
      >
        <Image
          alt="arrow-left"
          src="/images/slider_arrows_right.svg"
          height={70}
          width={70}
        />
      </div>

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        slidesPerView={5}
        navigation={{ prevEl, nextEl }}
        spaceBetween={90}
        //   slidesPerGroup={5}
        loop={true}
        //  loopFillGroupWithBlank={true}
        pagination={{
          el: ".my-custom-pagination-div",
          clickable: true,
          renderBullet: function (index, className) {
            return ReactDOMServer.renderToStaticMarkup(
              <div className="bg-[#EBE4E3]  h-full flex gap-4 rounded-full "></div>
            );
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper flex h-full "
      >
        {[...Array(20)].map((_, idx) => {
          return (
            <SwiperSlide key={idx} className="h-full ">
              <Product />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div className="flex gap-2 mx-4  mt-10 justify-center">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className=" rounded-full bg-pink h-5 w-5  features_dot  "
          ></div>
        ))}
      </div> */}
      <div className="my-custom-pagination-div flex gap-2 justify-center " />
    </div>
  );
};

export default Products;
