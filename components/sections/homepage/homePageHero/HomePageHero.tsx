import HeaderImageUnderline from "@/components/elements/HeaderImageUnderline";
import Logo from "@/components/elements/Logo";
import ContentWrap from "@/components/elements/layout/ContentWrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import * as ReactDOMServer from "react-dom/server";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/elements/Button";
import { LayoutHero } from "@/schemas";

const sliderWidth = 7;
const HomePageHero = ({
  heroData,
  links,
}: {
  heroData: any;
  links: {
    name: string;
    link: string;
    text: string;
    index: number;
  }[];
}) => {
  const router = useRouter();
  const { page } = router.query;
  const description = links.find((link) => link.link === page) || links[0];
  const [sliderPosition, setSliderPosition] = useState(0);
  const [slideCurrentIndex, setSlideCurrentIndex] = useState(1);
  const [activeTab, setActiveTab] = useState(1);
  const containerRef = useRef(1);
  const [containerWidth, setContainerWidth] = useState(0);
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
    <div className="">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        slidesPerView={1}
        // navigation={{ prevEl, nextEl }}
        // spaceBetween={90}
        //   slidesPerGroup={5}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper flex md:h-[80vh] h-[80vh] w-full"
      >
        {heroData.desktopImages.data.map((image: any, idx: number) => {
          return (
            <SwiperSlide
              key={idx}
              className="h-full md:h-[80vh] h-[80vh] w-full "
            >
              <div className="flex justify-center md:h-[80vh] h-[80vh]  relative flex items-end bg-[url(/images/home_mobile_slider_img_1.png)] md:bg-[url(/images/home_desktop_slider_img_1.png)] bg-cover bg-no-repeat bg-center">
                <Button
                  link={heroData.button.link}
                  variant={
                    heroData.button.button_variant.data.attributes.variant
                  }
                  className="uppercase mb-14"
                >
                  {heroData.button.text}
                </Button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <HeaderImageUnderline />
      <ContentWrap className=" flex flex-col items-center ">
        <div className="flex max-sm:flex-col max-sm:items-center gap-3 items-end justify-center md:my-12 my-5">
          <Logo color="pink" height={300} width={300} />
          <h1 className="text-pink font-medium md:text-[2.5em] text-4xl uppercase  flex items-end h-full leading-10">
            product range
          </h1>
        </div>
        <div className="flex flex-col md:w-[50%]">
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
      </ContentWrap>
    </div>
  );
};

export default HomePageHero;
