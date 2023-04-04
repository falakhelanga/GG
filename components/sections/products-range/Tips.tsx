import Logo from "@/components/elements/Logo";
import ContentWrap from "@/components/elements/layout/ContentWrap";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ArticleCard from "../homepage/articles/ArticleCard";
import Title from "@/components/elements/Title";

const articles = [
  {
    id: 1,
    image: "/images/blog_img_1.png",
    title: `the are 2 v's that matter the article`,
    body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
  vero eaque doloribus, ea, eius quas consectetur hic quidem unde
  sapiente molestias officia temporibus. Alias distinctio ducimus,
  odio exercitationem perferendis hic?`,
  },
  {
    id: 2,
    image: "/images/blog_img_2.png",
    title: `the are 2 v's that matter the article`,
    body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
  vero eaque doloribus, ea, eius quas consectetur hic quidem unde
  sapiente molestias officia temporibus. Alias distinctio ducimus,
  odio exercitationem perferendis hic?`,
  },
  {
    id: 3,
    image: "/images/blog_img_3.png",
    title: `the are 2 v's that matter the article`,
    body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
  vero eaque doloribus, ea, eius quas consectetur hic quidem unde
  sapiente molestias officia temporibus. Alias distinctio ducimus,
  odio exercitationem perferendis hic?`,
  },
];

const Tips = () => {
  return (
    <div className=" w-full  ">
      <Title
        size="2xl"
        className="text-center text-pink uppercase font-normal mb-4 max-sm:text-[2em]"
      >
        <span className="font-bold">how-to&apos;s</span> and tips
      </Title>
      {/* articles */}
      <div className="">
        <ContentWrap className="md:grid flex flex-col  md:grid-cols-3  gap-7">
          {articles.map((article) => (
            <ArticleCard {...article} key={article.id} />
          ))}
        </ContentWrap>
      </div>
    </div>
  );
};

export default Tips;
