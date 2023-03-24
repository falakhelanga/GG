import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CompetitionPageNav = () => {
  const router = useRouter();
  return (
    <div className="b">
      <div className="h-[70vh]  relative flex items-end overflow-hidden ">
        <div className="h-full bg-[url(/images/comp_desktop_header_2.png)] bg-contain  bg-no-repeat w-full  absolute top-[12rem] left-[6rem] z-[2]"></div>
        <div className="h-full bg-[url(/images/comp_desktop_header_bg.png)] bg-cover bg-no-repeat w-full absolute top-0 right-0"></div>
      </div>

      <div
        style={{
          backgroundColor: "rgb(233,96,138)",
          background:
            "linear-gradient(90deg, rgba(233,96,138,1) 0%, rgba(67,184,180,1) 100%)",
        }}
        className="w-full h-[3px]"
      ></div>
      <div className="w-full flex items-center justify-center relative -mt-[34rem]">
        <div className="w-[40%]">
          <img
            className="h-full w-full z-[4] relative"
            src="/images/comp_desktop_header_1.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-6 uppercase w-full justify-center mt-[2rem] text-pink text-lg ">
        <Link
          href="/entry"
          className={`${
            router.route === "/entry" && "border-b border-b-8 border-b-pink"
          }  `}
          scroll={false}
        >
          enter <span className="font-bold">now</span>
        </Link>
        <Link
          className={`${
            router.route === "/contestant" &&
            "border-b border-b-8 border-b-pink"
          }  `}
          href="/contestant"
          scroll={false}
        >
          view <span className="font-bold">gallery</span>
        </Link>
        <Link
          className={`${
            router.route === "/faq" && "border-b border-b-8 border-b-pink"
          }  `}
          href="/faq"
          scroll={false}
        >
          read <span className="font-bold">{"faq's"}</span>
        </Link>
        <Link
          className={`${
            router.route === "/terms-and-conditions" &&
            "border-b border-b-8 border-b-pink"
          }  `}
          href="/terms-and-conditions"
          scroll={false}
        >
          competition <span className="font-bold">terms</span>
        </Link>
      </div>
    </div>
  );
};

export default CompetitionPageNav;
