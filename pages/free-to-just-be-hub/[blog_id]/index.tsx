import ContentWrap from "@/components/elements/ui/ContentWrap";
import PageComponentBuilderController from "@/components/elements/ui/PageComponentBuilderController";
import QuoteText from "@/components/elements/ui/QuoteText";
import { useSubCategories } from "@/context/subCategories";
import { imageFormatter } from "@/helpers.tsx/imageFormatter";
import truncate from "@/helpers.tsx/textTruncate";
import { fetchAPI } from "@/lib/api";
import { ProductType, SubCategoryType } from "@/types/products";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const IndividualBlog = ({
  subcategories,
  newProducts,
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { setSubCategories, setNewProducts } = useSubCategories();
  // console.log(article, "articles");
  useEffect(() => {
    setNewProducts(newProducts);
    setSubCategories(subcategories);
  }, [setSubCategories, subcategories, setNewProducts, newProducts]);
  return (
    <div className="bg-[#F1ECEE]">
      <ContentWrap className="bg-white md:pt-[8rem] pt-[6rem] pb-14">
        <div className="uppercase flex items-center gap-2 text-sm text-black max-sm:text-xs">
          <Link
            className="hover:text-pink uppercase"
            href="/free-to-just-be-hub"
          >
            free to be hub
          </Link>
          {/* <FontAwesomeIcon
            icon={faChevronRight}
            className="text-pink text-xs"
          /> */}

          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-pink text-xs"
          />
          <span className="font-bold md:hidden block">
            {" "}
            {truncate(15, article?.title)}{" "}
          </span>
          <span className="font-bold md:block hidden r">
            {" "}
            {article?.title}{" "}
          </span>
        </div>
        <div className="mt-10">
          <h1 className=" font-medium md:text-[2.5em] max-sm:mb-3 text-4xl uppercase  flex items-end h-full leading-10">
            {article.title}
          </h1>
          <div className="w-full md:block hidden h-[715px] object-contain">
            <Image
              alt=""
              width={2000}
              height={2000}
              src={imageFormatter(article.desktop_image)}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="w-full block mb-8 md:hidden h-[715px] object-contain">
            <Image
              alt=""
              width={2000}
              height={2000}
              src={imageFormatter(article.mobile_image)}
              className="h-full w-full object-contain  "
            />
          </div>
          <PageComponentBuilderController pageContent={article.components} />
        </div>
      </ContentWrap>
    </div>
  );
};

export async function getStaticPaths() {
  const { data } = await fetchAPI("arcticles");

  const products = data?.map((article: any) => ({
    ...article?.attributes,
    id: article.id,
  }));
  const paths = products
    ? products?.map((article: any) => ({
        params: { blog_id: article.id.toString() },
      }))
    : [];
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps<{
  subcategories: SubCategoryType[];
  newProducts: ProductType[];
  // pageData: any;
  article: any;
}> = async (ctx) => {
  const { data: subcategories } = await fetchAPI("subcategories", ["products"]);
  const { data: article } = await fetchAPI(
    `arcticles/${ctx?.params?.blog_id}`,
    ["deep"]
  );
  // const { data: pageData } = await fetchAPI("basi-pages/1", ["deep"]);
  const productPopulate = ["products.products.image", "products.products"];
  const { data: productsData } = await fetchAPI(
    "products-range",
    productPopulate
  );
  const products: ProductType[] =
    productsData?.attributes?.products.products.data?.map((product: any) => ({
      ...product?.attributes,
      id: product.id,
    }));
  const newProducts = products.filter((product) => product.isNew);
  return {
    props: {
      // pageData,
      article: article?.attributes,
      newProducts,
      subcategories: subcategories?.map((subcategory: any) => ({
        ...subcategory?.attributes,
        id: subcategory.id,
      })),
    },
  };
};

export default IndividualBlog;
