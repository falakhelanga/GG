import ContentWrap from "@/components/elements/ui/ContentWrap";
import Logo from "@/components/elements/ui/Logo";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FreeToJustBeHubHero = () => {
  return (
    <div className="md:h-auto md:pt-24 w-full bg-[url(/images/mobile_hub_bg.png)] md:bg-[url(/images/desktop_hub_bg.png)] bg-cover bg-no-repeat md:bg-center  ">
      <ContentWrap className="grid md:grid-cols-2 h-full  items-end md:mt-14 pt-14">
        <div className="md:pb-10 max-sm:mt-[12rem]">
          <div className="">
            <Logo />
            <div className="md:text-8xl text-4xl text-pink font-semibold">
              Free to{" "}
              <span className="font-paul text-green font-normal md:text-8xl text-5xl">
                just be
              </span>
            </div>
            <div className="md:text-8xl font-bold text-white text-8xl">HUB</div>
          </div>
        </div>
        <div>
          <div className="text-end text-white font-bold">
            <div>
              <span className="font-paul text-2xl font-thin">latest </span>
              <span className="uppercase">article</span>
            </div>
          </div>
          <div className="p-6 bg-[rgb(255,255,255,0.9)] rounded-t-md">
            <div className="text-green uppercase font-semibold">
              can exercise and sweat affect the pH balance of your v-zone
            </div>
            <div className="text-black text-sm my-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              vero eaque doloribus, ea, eius quas consectetur hic quidem unde
              sapiente molestias officia temporibus. Alias distinctio ducimus,
              odio exercitationem perferendis hic?
            </div>
            <div className="uppercase font-medium my-6 text-black text-sm hover:text-pink font-semibold find-out-more ">
              <span className="">read more</span>{" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-pink find-out-more-chevron"
              />
            </div>
          </div>
        </div>
      </ContentWrap>
    </div>
  );
};

export default FreeToJustBeHubHero;
