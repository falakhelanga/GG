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
    text: `Gentle enough for everyday use to support a healthy, ideal pH
    balance for ultimate comfort in the v-zone`,
  },
  {
    name: "control",
    link: "/control",
    text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum adipisci quidem sint expedita soluta molestiae.",
  },
  {
    name: "intimate",
    link: "/intimate",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum adipisci quidem sint expedita soluta molestiae.",
  },
];

const HomePageHero = () => {
  const router = useRouter();
  const description = links.find((link) => link.link === router.route);
  return (
    <div className="">
      <div className="md:h-[75vh] h-[70vh]  relative flex items-end bg-[url(/images/home_mobile_slider_img_1.png)] md:bg-[url(/images/home_desktop_slider_img_1.png)] bg-cover bg-no-repeat bg-center"></div>

      <HeaderImageUnderline />
      <ContentWrap className=" flex flex-col items-center ">
        <div className="flex max-sm:flex-col max-sm:items-center gap-3 items-end justify-center md:my-12 my-5">
          <Logo color="pink" height={300} width={300} />
          <h1 className="text-pink font-medium md:text-[2.5em] text-2xl uppercase  flex items-end h-full leading-10">
            product range
          </h1>
        </div>
        <div className="flex flex-col md:w-[50%]">
          <div className=" flex gap-12 uppercase w-full  justify-center max-sm:text-center text-black md:text-lg text-sm border-b border-b-green ">
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
          <div className="text-brown text-center my-5">{description.text}</div>
        </div>
      </ContentWrap>
    </div>
  );
};

export default HomePageHero;
