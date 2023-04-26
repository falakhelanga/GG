import React from "react";
import ContentWrap from "./ContentWrap";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { LayoutLatestArticle } from "@/schemas";
import { imageFormatter } from "@/helpers.tsx/imageFormatter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import MarkDown from "./MarkDown";

const LatestArticle = ({
  desktop_background_image,
  article,
  latest_article_card,
  mobile_background_image,
}: LayoutLatestArticle) => {
  console.log(article.data.attributes, "hfh");
  return (
    <div
      style={{
        backgroundImage: `url(${imageFormatter(desktop_background_image)})`,
      }}
      className={`md:h-auto md:pt-24 w-full   bg-cover bg-no-repeat md:bg-center  `}
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
            <div className="md:text-8xl font-bold text-white text-8xl">HUB</div>
          </div>
        </div>
        <div>
          <div className="text-end text-white font-bold">
            <div>
              {latest_article_card.top_right_text}
              {/* <span className="font-paul text-2xl font-thin">latest </span>
              <span className="uppercase">article</span> */}
            </div>
          </div>
          <div className="p-6 bg-[rgb(255,255,255,0.9)] rounded-t-md">
            <MarkDown className="text-green uppercase font-semibold prose">
              {article.data.attributes.title}
            </MarkDown>
            <MarkDown className="text-black text-sm my-8">
              {article.data.attributes.intro_text}
            </MarkDown>
            <div className="uppercase font-medium my-6 text-black text-sm hover:text-pink font-semibold find-out-more ">
              <span className="">
                {latest_article_card.read_more_link_text}
              </span>{" "}
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

export default LatestArticle;
