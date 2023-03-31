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
import { Pagination, Navigation } from "swiper";
import React from "react";
import Button from "@/components/elements/Button";

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
        //  loopFillGroupWithBlank={true}
        pagination={true}
        modules={[Pagination, Navigation]}
        className="mySwiper flex md:h-[80vh] h-[80vh] w-full"
      >
        {[...Array(3)].map((_, idx) => {
          return (
            <SwiperSlide
              key={idx}
              className="h-full md:h-[80vh] h-[80vh] w-full "
            >
              <div className="flex justify-center md:h-[80vh] h-[80vh]  relative flex items-end bg-[url(/images/home_mobile_slider_img_1.png)] md:bg-[url(/images/home_desktop_slider_img_1.png)] bg-cover bg-no-repeat bg-center">
                <Button className="uppercase mb-14">find out more</Button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

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
