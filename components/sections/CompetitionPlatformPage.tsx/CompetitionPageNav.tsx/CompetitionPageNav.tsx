import HeaderImageUnderline from "@/components/elements/ui/HeaderImageUnderline";
import ContentWrap from "@/components/elements/ui/ContentWrap";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  {
    ligthText: "enter",
    boldText: "now",
    link: "/competition/entry",
  },
  {
    ligthText: "view",
    boldText: "gallery",
    link: "/competition/contestant",
  },
  {
    ligthText: "read",
    boldText: `faq's`,
    link: "/competition/faq",
  },
  {
    ligthText: "competition",
    boldText: "terms",
    link: "/competition/terms-and-conditions",
  },
];

const CompetitionPageNav = () => {
  const router = useRouter();
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

  useEffect(() => {
    setActiveTabIndex(router.route);
  }, []);

  const moveToActiveTab = () => {
    setActiveTabIndex(router.route as string);
  };
  return (
    <div className="">
      <div className="md:h-[80vh] h-[80vh]  relative flex items-end  ">
        <div className="h-full overflow-hidden hidden md:block  w-full absolute top-[0rem] md:left-[6rem] z-[2]">
          <div className="h-full bg-[url(/images/comp_desktop_header_2.png)] bg-contain  bg-no-repeat w-full absolute md:top-[8rem] top-[20rem] "></div>
        </div>

        <div className="h-full bg-[url(/images/comp_mobile_header_bg.png)] md:bg-[url(/images/comp_desktop_header_bg.png)] bg-cover  bg-no-repeat w-full absolute top-0 right-0"></div>
        <div className="w-full flex items-center justify-center relative -mb-10">
          <div className="md:w-[40%] w-[80%] ">
            <img
              className="h-full w-full z-[4] relative max-sm:ml-3 md:block hidden"
              src="/images/comp_desktop_header_1.png"
              alt=""
            />
            <img
              className="h-full w-full z-[4] relative max-sm:ml-3 block md:hidden"
              src="/images/comp_mobile_header_1.png"
              alt=""
            />
            {/* <img
              className="h-full w-full z-[4] relative max-sm:ml-3 block md:hidden"
              src="/images/comp_mobile_header_bg (1).png"
              alt=""
            /> */}
          </div>
        </div>
      </div>

      <HeaderImageUnderline />
      <ContentWrap>
        <div
          // onMouseEnter={() => {
          //   setShowWhiteLine(true);
          // }}
          // onMouseLeave={() => {
          //   setShowWhiteLine(false);
          //   setActiveTabIndex(null);
          // }}
          className="  overflow-hidden flex justify-center"
        >
          <div className="  w-fit overflow-hidden relative flex gap-6 uppercase  justify-center max-sm:text-left text-pink md:text-lg text-sm mt-[4rem] ">
            {NAV_LINKS.map((link) => (
              <Link
                className={`pb-4 md:hover:translate-y-[3px]  transition-all ease-in transition-duration-[3000ms] ${
                  router.route === link.link && "  translate-y-[3px] "
                }`}
                onMouseEnter={() => {
                  setActiveTabIndex(link.link);
                }}
                onMouseLeave={moveToActiveTab}
                key={link.link}
                href={link.link}
                ref={(el) => (tabsRef.current[link.link] = el)}
                scroll={false}
              >
                {link.ligthText}{" "}
                <span className="font-bold">{link.boldText}</span>
              </Link>
            ))}
            {/* {router.isReady && (
              <span
                style={{
                  left: tabsRef?.current[router.route as string]?.offsetLeft,
                  width: tabsRef?.current[router.route as string]?.clientWidth,
                }}
                className={`absolute  block h-2 bottom-0 bg-pink transition-all duration-300 `}
              />
            )} */}

            <span
              style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
              className={`absolute  bg-pink  block h-2 bg-black transition-all duration-300 bottom-0`}
            />
          </div>
        </div>
      </ContentWrap>
    </div>
  );
};

export default CompetitionPageNav;
