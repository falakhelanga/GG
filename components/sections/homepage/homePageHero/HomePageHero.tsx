import HeaderImageUnderline from "@/components/elements/ui/HeaderImageUnderline";
import Logo from "@/components/elements/ui/Logo";
import ContentWrap from "@/components/elements/ui/ContentWrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import * as ReactDOMServer from "react-dom/server";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Button from "@/components/elements/ui/Button";
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
  const [activeTabIndex, setActiveTabIndex] = useState<string | null>(null);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const [showWhiteLine, setShowWhiteLine] = useState(false);
  const tabsRef = useRef<any>([]);

  useEffect(() => {
    function setTabPosition() {
      if (!activeTabIndex) return;
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  const moveToActiveTab = () => {
    setActiveTabIndex(page as string);
  };

  useEffect(() => {
    if (!page) {
      setActiveTabIndex("comfort");
    } else {
      setActiveTabIndex(page as string);
    }
  }, [page]);

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
        speed={600}
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
          <div className="overflow-hidden flex flex-col uppercase w-full   relative items-center max-sm:text-center text-black md:text-lg text-md border-b border-b-green  ">
            <div className="flex max-sm:gap-8 gap-[4rem] ">
              {links.map((item, idx) => {
                return (
                  <Link
                    key={item.name}
                    ref={(el) => (tabsRef.current[item.name] = el)}
                    href={`?page=${item.name}`}
                    onMouseEnter={() => {
                      setActiveTabIndex(item.name);
                    }}
                    onMouseLeave={moveToActiveTab}
                    className={`hover:text-green md:hover:translate-y-[3px] transition-all ease-in transition-duration-[3000ms] ${
                      page === item.link && "  translate-y-[3px] "
                    } ${
                      !page &&
                      idx === 0 &&
                      "  translate-y-[3px] transition duration-200 transition-all ease-in-out"
                    } relative  pb-4   `}
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

            <span
              style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
              className={`absolute  bg-green  block h-2 bg-black transition-all duration-300 bottom-0`}
            />
          </div>
          <div className="text-brown text-center my-5 text-lg">
            {description.text}
          </div>
        </div>
      </ContentWrap>
    </div>
  );
};

export default HomePageHero;
