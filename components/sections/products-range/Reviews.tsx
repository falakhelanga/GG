import Title from "@/components/elements/Title";
import React, { useState } from "react";
import Review from "./Review";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import * as ReactDOMServer from "react-dom/server";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import { ReviewType } from "@/types/products";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/pro-solid-svg-icons";
import ContentWrap from "@/components/elements/layout/ContentWrap";

const Reviews = ({ reviews }: { reviews: ReviewType[] }) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const pagination = {
    el: ".my-custom-pagination-div",
    renderBullet: function (index: number, className: string) {
      return ReactDOMServer.renderToStaticMarkup(
        <div
          className={`${className} bg-pink h-4 w-4 flex gap-4 rounded-full`}
        ></div>
      );
    },
  };
  return (
    <div>
      <Title
        size="md"
        className="uppercase text-black md:text-3xl font-normal border-black border-b-2 border-b pb-5 border-b-black"
      >
        what other woman <span className="font-bold">have to say</span>
      </Title>
      <div className="md:block hidden">
        {/* DESKTOP VIEW */}
        {reviews.length > 3 && (
          <div className=" relative">
            <div
              className=" absolute top-[40%] md:left-[0rem] -left-6 z-[3] md:cursor-pointer  rounded-full h-7 w-7 flex items-center justify-center "
              ref={(node) => setPrevEl(node)}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-pink" />
            </div>

            <div
              ref={(node) => setNextEl(node)}
              className=" absolute top-[40%] md:right-[0rem] -right-6 z-[3] md:cursor-pointer  rounded-full h-7 w-7 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-pink" />
            </div>

            <ContentWrap className="overflow-hidden">
              <Swiper
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1685: {
                    slidesPerView: 4,
                  },
                }}
                slidesPerView={5}
                navigation={{ prevEl, nextEl }}
                spaceBetween={32}
                //   slidesPerGroup={5}
                loop={true}
                //  loopFillGroupWithBlank={true}
                centeredSlides={true}
                pagination={pagination}
                modules={[Pagination, Navigation]}
                className="mySwiper flex mt-6 "
              >
                {reviews?.map((review: any, idx: number) => (
                  <SwiperSlide key={idx}>
                    {" "}
                    <Review review={review} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </ContentWrap>

            {/* <div className="my-custom-pagination-div flex gap-2 justify-center  w-full h-10 md:mt-[5rem] mt-[9rem] " /> */}
          </div>
        )}
        {reviews.length <= 3 && (
          <div className="w-full grid grid-cols-3 gap-12 mt-6">
            {reviews.map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden block">
        <div className=" relative">
          <div
            className=" absolute top-[40%] md:left-[0rem] -left-6 z-[3] md:cursor-pointer  rounded-full h-7 w-7 flex items-center justify-center "
            ref={(node) => setPrevEl(node)}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-pink" />
          </div>

          <div
            ref={(node) => setNextEl(node)}
            className=" absolute top-[40%] md:right-[0rem] -right-6 z-[3] md:cursor-pointer  rounded-full h-7 w-7 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-pink" />
          </div>

          <ContentWrap className="overflow-hidden">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 3,
                },
                1685: {
                  slidesPerView: 4,
                },
              }}
              slidesPerView={5}
              navigation={{ prevEl, nextEl }}
              spaceBetween={32}
              //   slidesPerGroup={5}
              loop={true}
              //  loopFillGroupWithBlank={true}
              centeredSlides={true}
              pagination={pagination}
              modules={[Pagination, Navigation]}
              className="mySwiper flex mt-6 "
            >
              {reviews?.map((review: any, idx: number) => (
                <SwiperSlide key={idx}>
                  {" "}
                  <Review review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </ContentWrap>

          {/* <div className="my-custom-pagination-div flex gap-2 justify-center  w-full h-10 md:mt-[5rem] mt-[9rem] " /> */}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
