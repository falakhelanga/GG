import React, { useState } from "react";
import Product from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";
import * as ReactDOMServer from "react-dom/server";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import Image from "next/image";
import { ProductType } from "@/types/products";
import SliderLeftArrow from "@/components/elements/ui/SliderLeftArrow";
import SliderRightArrow from "@/components/elements/ui/SliderRightArrow";

const Products = ({ products: productsData }: any) => {
  // const { products: productsData } = sliderData;
  const products: ProductType[] = productsData.data.map((product: any) => ({
    ...product?.attributes,
    id: product.id,
  }));
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const pagination = {
    el: ".my-custom-pagination-div",
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return ReactDOMServer.renderToStaticMarkup(
        <div
          className={`${className} bg-pink h-4 w-4 flex gap-4 rounded-full`}
        ></div>
      );
    },
  };
  return (
    <div className=" relative md:mb-14 mb-8">
      <div
        className=" absolute top-[20%] md:left-[0rem] md:ml-[20rem] -left-6 z-[3] md:cursor-pointer  "
        ref={(node) => setPrevEl(node)}
      >
        {/* <Image
          alt="arrow-left"
          src="/images/slider_arrows_left.svg"
          height={70}
          width={70}
        /> */}
        <SliderLeftArrow />
      </div>

      <div
        ref={(node) => setNextEl(node)}
        className=" absolute top-[20%] md:right-[0rem] md:mr-[20rem] -right-6 z-[3] md:cursor-pointer "
      >
        <SliderRightArrow />
        {/* <Image
          alt="arrow-left"
          src="/images/slider_arrows_right.svg"
          height={70}
          width={70}
        /> */}
      </div>

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 4,
          },
          1685: {
            slidesPerView: 5,
          },
        }}
        slidesPerView={5}
        navigation={{ prevEl, nextEl }}
        spaceBetween={90}
        // speed={6000}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper  "
      >
        {products.map((product, idx) => {
          return (
            <SwiperSlide key={idx} className="">
              <Product isCarousel product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="my-custom-pagination-div flex gap-2 justify-center  w-full h-10 md:mt-[8rem] mt-[5rem] " />
    </div>
  );
};

export default Products;
