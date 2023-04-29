import Button from "@/components/elements/ui/Button";
import ContentWrap from "@/components/elements/ui/ContentWrap";
import Heading from "@/components/elements/ui/Heading";
import { ScrollToTop } from "@/components/elements/ui/ScrollToTop";
import DropDown from "@/components/sections/CompetitionPlatformPage.tsx/gallery/GallerySortDropDown";
import SearchInput from "@/components/sections/CompetitionPlatformPage.tsx/gallery/SearchInput";
import FreeToJustBeHubHero from "@/components/sections/FreeToJustBeHub/FreeToJustBeHubHero";
import SearchResult from "@/components/sections/FreeToJustBeHub/SearchResult";
import ArticleCard from "@/components/sections/homepage/articles/ArticleCard";
import { searchResultsFormatter } from "@/context/searchResultsFormatter";
import { useSubCategories } from "@/context/subCategories";
import { useSearch } from "@/hooks/useSearch";
import { fetchAPI } from "@/lib/api";
import { ProductType, SubCategoryType } from "@/types/products";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React, { useEffect, useMemo, useState } from "react";

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

const categoriesOptions = ["select", "comfort", "control", "intimate"];
const sortingOptions = ["newest", "oldest"];
const searchKeys = ["title"];
const ITEMS_PER_PAGE = 16;
const FreeToBeHub = ({
  subcategories,
  newProducts,
  articles,
  pageData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { setSubCategories, setNewProducts } = useSubCategories();
  const latestArticleCard = pageData.attributes.page_components.filter(
    (item: any) => item.__component === "layout.latest-article"
  )[0]["latest_article_card"];

  const [searchValue, setSearchValue] = useState("");
  const [selectedSearchValue, setSelectedSearchValue] = useState("");
  const [sortValue, setSortValue] = useState<string | null>(sortingOptions[0]);
  const [sortCategoriesValue, setSortCategoriesValue] = useState<string | null>(
    categoriesOptions[0]
  );
  const [visible, setVisible] = useState(ITEMS_PER_PAGE);
  const [totalBlogs, setTotalBlogs] = useState(1);

  const articlesByCategories = useMemo(() => {
    if (sortCategoriesValue?.trim().toLowerCase() === "select") {
      return articles;
    }

    if (sortCategoriesValue) {
      return articles.filter(
        (article: any) =>
          article.category.data.attributes.name.toLowerCase().trim() ===
          sortCategoriesValue?.toLowerCase().trim()
      );
    }

    return articles;
  }, [articles, sortCategoriesValue]);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + ITEMS_PER_PAGE);
  };
  useEffect(() => {
    setNewProducts(newProducts);
    setSubCategories(subcategories);
  }, [setSubCategories, subcategories, setNewProducts, newProducts]);

  const { searchResults, loading } = useSearch(
    articlesByCategories || [],
    searchKeys,
    selectedSearchValue
  );

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue.trim() === "") return;
    setSelectedSearchValue(searchValue);
  };

  useEffect(() => {
    const timemout = setTimeout(() => {
      if (searchValue.trim() === "") {
        setSelectedSearchValue("");
      }
    }, 300);

    return () => clearTimeout(timemout);
  }, [searchValue]);

  const sortedArticles = useMemo(() => {
    if (sortValue === "newest") {
      return articlesByCategories?.sort((a, b) => {
        const firstDate = a.createdAt;
        const secondDate = b.createdAt;
        if (firstDate > secondDate) {
          return -1;
        }
        // if (firstDate < secondDate) {
        //   return 1;
        // }
        return 0;
      });
    }
    if (sortValue === "oldest") {
      return articlesByCategories?.sort((a, b) => {
        const firstDate = a.createdAt;
        const secondDate = b.createdAt;
        if (firstDate < secondDate) {
          return -1;
        }
        // if (firstDate < secondDate) {
        //   return 1;
        // }
        return 0;
      });
    }
  }, [sortValue, articlesByCategories]);
  const latestArticle = sortedArticles?.reduce((previous, current) => {
    return new Date(current.createdAt) > new Date(previous.createdAt)
      ? current
      : previous;
  });

  console.log(latestArticle, "las");
  return (
    <>
      <Head>
        <title>Free to just be hub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pb-14 bg-[#F1ECEE]">
        <div className="">
          <FreeToJustBeHubHero
            article={latestArticle}
            latestArticleCardData={latestArticleCard}
          />
        </div>
        <ContentWrap>
          <Heading className="uppercase my-14">
            your <span className="font-bold">hub</span> for all things woman
          </Heading>

          <div className="text-center text-xl md:mx-[8rem] mb-12">
            Browse through the wealth of info on everything to do with feminine
            hygiene, womanhood and fighting the{" "}
            <span className="font-bold">freedom to</span>{" "}
            <span className="font-paul text-4xl">just be</span>
          </div>
          <div className="relative">
            <div className="md:grid flex flex-col  md:grid-cols-3 md:mt-10 md:gap-7 gap-1 relative z-[5]">
              <SearchInput
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleSearch={handleSearch}
                placeholder="Search for an article"
              />

              <div>
                <DropDown
                  options={categoriesOptions}
                  name="Categories"
                  sortValue={sortCategoriesValue}
                  setSortValue={setSortCategoriesValue}
                />
              </div>
              <div>
                <DropDown
                  options={sortingOptions}
                  name="Sort articles by"
                  sortValue={sortValue}
                  setSortValue={setSortValue}
                />
              </div>
            </div>
            {searchResultsFormatter(searchResults).length > 0 && (
              <SearchResult
                searchResults={searchResultsFormatter(searchResults)}
              />
            )}
          </div>

          <div className="md:grid flex flex-col  md:grid-cols-3 mt-10 gap-7">
            {articlesByCategories?.slice(0, visible).map((article) => (
              <ArticleCard {...article} key={article.id} />
            ))}
          </div>
          <div className="flex md:justify-center mt-14 z-[3] relative mb-1 max-sm:gap-4 ">
            {articlesByCategories?.slice(0, visible).length <
              articles.length && (
              <div className="max-sm:flex-1">
                <Button
                  onClick={() => {
                    showMoreItems();
                    // paginate();
                  }}
                  variant="outline"
                  className="md:px-16 max-sm:w-full"
                >
                  LOAD MORE
                </Button>
              </div>
            )}

            <div className="md:absolute md:right-0">
              <ScrollToTop />
            </div>
          </div>
        </ContentWrap>
      </div>
    </>
  );
};

export default FreeToBeHub;

export const getStaticProps: GetStaticProps<{
  subcategories: SubCategoryType[];
  newProducts: ProductType[];
  pageData: any;
  articles: {
    createdAt: any;
    id: number;
    image: any;
    title: string;
    body: string;
    mobile_image: string;
    desktop_image: string;
  }[];
}> = async (ctx) => {
  const { data: subcategories } = await fetchAPI("subcategories", ["products"]);
  const { data: articles } = await fetchAPI("arcticles", [
    "desktop_image",
    "category",
    "mobile_image",
  ]);
  const { data: pageData } = await fetchAPI("basi-pages/1", ["deep"]);
  const productPopulate = ["products.products.image", "products.products"];
  const { data: productsData } = await fetchAPI(
    "products-range",
    productPopulate
  );
  const products: ProductType[] =
    productsData.attributes.products.products.data.map((product: any) => ({
      ...product.attributes,
      id: product.id,
    }));
  const newProducts = products.filter((product) => product.isNew);
  return {
    props: {
      pageData,
      articles: articles
        .map((article: any) => ({
          ...article.attributes,
          id: article.id,
        }))
        .map((article: any) => ({
          ...article,
          desktop_image: article.desktop_image,
          mobile_image: article.mobile_image,
          body: article.intro_text,
        })),
      newProducts,
      subcategories: subcategories?.map((subcategory: any) => ({
        ...subcategory.attributes,
        id: subcategory.id,
      })),
    },
  };
};
