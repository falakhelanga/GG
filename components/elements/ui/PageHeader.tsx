import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import Button from "./Button";
import HeaderImageUnderline from "./HeaderImageUnderline";

const PageHeader = ({
  boldText,
  normalText,
}: {
  boldText: any;
  normalText: any;
}) => {
  return (
    <div className="w-screen bg-[#E9E7E6] py-24 flex justify-center flex-col pt-36 uppercase mb-8">
      <img src="/images/GynaGuard Logo Pink.svg" className="w-48 m-auto" />
      <div className="flex justify-center gap-4">
        <h2 className="text-pink text-5xl font-extrabold">{boldText}</h2>
        <h2 className="text-pink text-5xl ">{normalText}</h2>
      </div>
    </div>
  );
};

export default PageHeader;
