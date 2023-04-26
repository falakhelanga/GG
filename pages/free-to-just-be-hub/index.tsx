import Button from "@/components/elements/ui/Button";
import ContentWrap from "@/components/elements/ui/ContentWrap";
import Heading from "@/components/elements/ui/Heading";
import { ScrollToTop } from "@/components/elements/ui/ScrollToTop";
import FreeToJustBeHubHero from "@/components/sections/FreeToJustBeHub/FreeToJustBeHubHero";
import ArticleCard from "@/components/sections/homepage/articles/ArticleCard";
import { useSubCategories } from "@/context/subCategories";
import { fetchAPI } from "@/lib/api";
import { ProductType, SubCategoryType } from "@/types/products";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useEffect } from "react";

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

const FreeToBeHub = ({
  subcategories,
  newProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { setSubCategories, setNewProducts } = useSubCategories();
  useEffect(() => {
    setNewProducts(newProducts);
    setSubCategories(subcategories);
  }, [setSubCategories, subcategories, setNewProducts, newProducts]);
  return (
    <div className="pb-14">
      <div className="">
        <FreeToJustBeHubHero />
      </div>
      <ContentWrap>
        <Heading className="uppercase my-14">
          your <span className="font-bold">hub</span> for all things woman
        </Heading>

        <div className="text-center text-xl md:mx-[8rem] mb-14">
          Browse through the wealth of info on everything to do with feminine
          hygiene, womanhood and fighting the{" "}
          <span className="font-bold">freedom to</span>{" "}
          <span className="font-paul text-4xl">just be</span>
        </div>
        <div className="md:grid flex flex-col  md:grid-cols-3 mt-10 gap-7">
          {articles.map((article) => (
            <ArticleCard {...article} key={article.id} />
          ))}
        </div>
        <div className="flex md:justify-center mt-14 relative mb-1">
          <Button
            onClick={() => {
              // paginate();
            }}
            variant="outline"
            className="px-16"
          >
            LOAD MORE
          </Button>

          <ScrollToTop />
        </div>
      </ContentWrap>
    </div>
  );
};

export default FreeToBeHub;

export const getStaticProps: GetStaticProps<{
  subcategories: SubCategoryType[];
  newProducts: ProductType[];
}> = async (ctx) => {
  const { data: subcategories } = await fetchAPI("subcategories", ["products"]);
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
      newProducts,
      subcategories: subcategories.map((subcategory: any) => ({
        ...subcategory.attributes,
        id: subcategory.id,
      })),
    },
  };
};
