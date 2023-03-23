import Link from "next/link";
import React from "react";

const CompetitionPageNav = () => {
  return (
    <div className="">
      <div className="h-[70vh]  relative flex items-end">
        <div className="h-full bg-[url(/images/comp_desktop_header_2.png)] bg-cover bg-no-repeat w-full absolute top-[10rem] right-0 z-[2]"></div>
        <div className="h-full bg-[url(/images/comp_desktop_header_bg.png)] bg-cover bg-no-repeat w-full absolute top-0 right-0"></div>
        <div className="w-full flex items-center justify-center relative -mb-[5rem]">
          <div className="w-[40%]">
            <img
              className="h-full w-full z-[4] relative"
              src="/images/comp_desktop_header_1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgb(233,96,138)",
          background:
            "linear-gradient(90deg, rgba(233,96,138,1) 0%, rgba(67,184,180,1) 100%)",
        }}
        className="w-full h-[4px]"
      ></div>
      <div className="flex gap-6 uppercase w-full justify-center mt-28 text-pink text-lg ">
        <Link href="#" className="border-b border-b-8 border-b-pink">
          entry <span className="font-bold">form</span>
        </Link>
        <Link href="#">
          contestant <span className="font-bold">gallery</span>
        </Link>
        <Link href="#">
          <div className="font-bold">faq</div>
        </Link>
        <Link href="#">
          <span className="font-bold">T'S</span> & C'S
        </Link>
      </div>
    </div>
  );
};

export default CompetitionPageNav;
