import HeaderImageUnderline from "@/components/elements/ui/HeaderImageUnderline";
import ContentWrap from "@/components/elements/ui/ContentWrap";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NAV_LINKS = [
  {
    ligthText: "enter",
    boldText: "now",
    link: "/entry",
  },
  {
    ligthText: "view",
    boldText: "gallery",
    link: "/contestant",
  },
  {
    ligthText: "read",
    boldText: `faq's`,
    link: "/faq",
  },
  {
    ligthText: "competition",
    boldText: "terms",
    link: "/terms-and-conditions",
  },
];

const CompetitionPageNav = () => {
  const router = useRouter();
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
      <ContentWrap className=" ">
        <div className=" flex gap-6 uppercase w-full justify-center max-sm:text-center text-pink md:text-lg text-sm mt-[4rem] ">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.link}
              href={link.link}
              className={`${
                router.route === link.link &&
                "border-b border-b-8 border-b-pink "
              }  `}
              scroll={false}
            >
              {link.ligthText}{" "}
              <span className="font-bold">{link.boldText}</span>
            </Link>
          ))}
        </div>
      </ContentWrap>
    </div>
  );
};

export default CompetitionPageNav;
