import React from "react";
import ContentWrap from "./ContentWrap";
import ArticleCard from "@/components/sections/homepage/articles/ArticleCard";

const Blogs = ({ blogs: blogsData }: { blogs: any }) => {
  const articles = blogsData.data
    .map((article: any) => ({
      ...article.attributes,
      id: article.id,
    }))
    .map((article: any) => ({
      ...article,
      desktop_image: article.desktop_image,
      mobile_image: article.mobile_image,
      body: article.intro_text,
    }));
  return (
    <ContentWrap className="md:grid flex flex-col  md:grid-cols-3 mt-10 gap-7">
      {articles.map((article: any) => (
        <ArticleCard {...article} key={article.id} />
      ))}
    </ContentWrap>
  );
};

export default Blogs;
