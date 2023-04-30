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
import SlidingHero from "@/components/elements/ui/SlidingHero";
import GynaguardLogo from "@/components/elements/ui/GynaguardLogo";
import GynaguardProductRangeHeading from "@/components/elements/ui/GynaguardProductRangeHeading";
import { ColoursEnum } from "@/enums/colourEnum";

const sliderWidth = 7;
const HomePageHero = ({
  links,
}: {
  links: {
    name: string;
    link: string;
    text: string;
    index: number;
  }[];
}) => {
  const router = useRouter();
  const { page } = router.query;
  const description = links
    ? links.find((link) => link.link === page) || links[0]
    : null;
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
      {/* <SlidingHero heroData={heroData} /> */}
      <ContentWrap className=" flex flex-col items-center ">
        <div className="flex flex-col md:w-[50%]">
          <div className="overflow-hidden flex flex-col uppercase w-full   relative items-center max-sm:text-center text-black md:text-lg text-md border-b border-b-green  ">
            <div className="flex max-sm:gap-8 gap-[4rem] ">
              {links.map((item, idx) => {
                return (
                  <Link
                    key={item.name}
                    ref={(el) =>
                      (tabsRef.current[item.name.trim().toLowerCase()] = el)
                    }
                    href={`?page=${item.name.toLowerCase()}`}
                    onMouseEnter={() => {
                      setActiveTabIndex(item.name.toLowerCase());
                    }}
                    onMouseLeave={moveToActiveTab}
                    className={`hover:text-green relative z-[10] md:hover:translate-y-[3px] transition-all ease-in transition-duration-[3000ms] ${
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
              className={`absolute  bg-green  block h-2  transition-all duration-300 bottom-0`}
            />
          </div>
          <div className="text-black text-center my-5 text-lg">
            {description.text}
          </div>
        </div>
      </ContentWrap>
    </div>
  );
};

export default HomePageHero;
