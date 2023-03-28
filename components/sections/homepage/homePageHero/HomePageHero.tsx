import HeaderImageUnderline from "@/components/elements/HeaderImageUnderline";
import Logo from "@/components/elements/Logo";
import ContentWrap from "@/components/elements/layout/ContentWrap";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const links = [
  {
    name: "comfort",
    link: "/",
  },
  {
    name: "control",
    link: "/control",
  },
  {
    name: "intimate",
    link: "/intimate",
  },
];

const HomePageHero = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className="md:h-[70vh] h-[50vh]  relative flex items-end bg-[url(/images/home_desktop_slider_img_1.png)] bg-cover bg-center"></div>

      <HeaderImageUnderline />
      <ContentWrap className=" flex flex-col items-center ">
        <div className="flex gap-3 items-end justify-center my-12">
          <Logo color="pink" height={300} width={300} />
          <h1 className="text-pink font-medium text-[2.5em] uppercase  flex items-end h-full leading-10">
            product range
          </h1>
        </div>
        <div className=" flex gap-12 uppercase w-[50%]  justify-center max-sm:text-center text-black md:text-lg text-sm border-b border-b-green ">
          {links.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.link}
                className={`${
                  router.route === item.link &&
                  "border-b border-b-8 border-b-green text-green "
                }  `}
                scroll={false}
              >
                <span className="font-bold">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </ContentWrap>
    </div>
  );
};

export default HomePageHero;
