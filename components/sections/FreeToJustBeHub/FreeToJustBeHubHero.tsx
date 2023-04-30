import ContentWrap from "@/components/elements/ui/ContentWrap";
import Logo from "@/components/elements/ui/Logo";
import MarkDown from "@/components/elements/ui/MarkDown";
import { imageFormatter } from "@/helpers.tsx/imageFormatter";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FreeToJustBeHubHero = ({
  latestArticleCardData,
  article,
}: {
  latestArticleCardData: any;
  article: any;
}) => {
  const topRightText = latestArticleCardData?.top_right_text.split(" ");
  console.log(article, "gdg");
  return (
    <>
      {/* DESKTOP  */}
      <div
        style={{
          backgroundImage: `url(${imageFormatter(article.desktop_image)})`,
        }}
        className="md:h-auto md:pt-24 w-full  bg-cover bg-no-repeat md:bg-center md:block hidden "
      >
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
              <div className="md:text-8xl font-bold text-white text-8xl">
                HUB
              </div>
            </div>
          </div>
          <div>
            <div className="text-end text-white font-bold">
              {topRightText ? (
                <div>
                  <span className="font-paul text-2xl font-thin">
                    {topRightText[0]}
                  </span>
                  <span className="uppercase">{topRightText[1]}</span>
                </div>
              ) : null}
            </div>
            <div className="p-6 bg-[rgb(255,255,255,0.9)] rounded-t-md">
              <div className="text-green uppercase font-semibold">
                {article.title}
              </div>
              <MarkDown className="text-black text-sm my-8">
                {article.intro_text}
              </MarkDown>
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

      {/* MOBILE */}

      <div
        style={{
          backgroundImage: `url(${imageFormatter(article.mobile_image)})`,
        }}
        className="md:h-auto md:pt-24 w-full  bg-cover bg-no-repeat md:bg-center md:hidden block "
      >
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
              <div className="md:text-8xl font-bold text-white text-8xl">
                HUB
              </div>
            </div>
          </div>
          <div>
            <div className="text-end text-white font-bold">
              {topRightText ? (
                <div>
                  <span className="font-paul text-2xl font-thin">
                    {topRightText[0]}
                  </span>
                  <span className="uppercase">{topRightText[1]}</span>
                </div>
              ) : null}
            </div>
            <div className="p-6 bg-[rgb(255,255,255,0.9)] rounded-t-md">
              <div className="text-green uppercase font-semibold">
                {article.title}
              </div>
              <MarkDown className="text-black text-sm my-8">
                {article.intro_text}
              </MarkDown>
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
    </>
  );
};

export default FreeToJustBeHubHero;
