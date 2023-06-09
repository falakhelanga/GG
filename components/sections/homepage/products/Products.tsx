import React, { useMemo, useState } from "react";
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
import { useRouter } from "next/router";
import ProductsRange from "../../products-range/ProductsRange";
import ProductBlock from "@/components/elements/ui/ProductBlock";

const Products = ({ products: productsData }: any) => {
  // const { products: productsData } = sliderData;
  const products: ProductType[] = productsData.data.map((product: any) => ({
    ...product?.attributes,
    id: product.id,
  }));
  const router = useRouter();
  const { page } = router.query;
  const pageProducts = useMemo(() => {
    return products.filter((item: any) => {
      return (
        item.category.data?.attributes?.name?.trim().toLowerCase() ===
        page?.toString().toLowerCase()
      );
    });
  }, [products, page]);
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
  // console.log(pageProducts[0], "hs");
  return (
    <div className=" relative md:mb-14 mb-8 mx-4">
      {pageProducts.length === 1 && (
        <ProductBlock
          product={{
            data: {
              attributes: pageProducts[0],
            },
          }}
        />
      )}
      {pageProducts.length < 5 && pageProducts.length !== 1 && (
        <ProductsRange products={pageProducts} isBlogPage />
      )}
      {pageProducts.length > 5 && (
        <>
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
            className=" absolute top-[20%] md:right-[0rem] md:mr-[20rem] -right-6 z-[3] md:cursor-pointer  "
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
            {pageProducts.map((product, idx) => {
              return (
                <SwiperSlide key={idx} className="">
                  <Product isCarousel product={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="my-custom-pagination-div flex gap-2 justify-center  w-full h-10 md:mt-[6rem] mt-[6rem] " />
        </>
      )}
    </div>
  );
};

export default Products;
