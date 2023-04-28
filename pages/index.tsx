import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CompetitionPageNav from "@/components/sections/CompetitionPlatformPage.tsx/CompetitionPageNav.tsx/CompetitionPageNav";
import DropDown from "@/components/sections/CompetitionPlatformPage.tsx/gallery/GallerySortDropDown";
import HomePageHero from "@/components/sections/homepage/homePageHero/HomePageHero";
import Products from "@/components/sections/homepage/products/Products";
import FeminineHygiene from "@/components/sections/homepage/feminineHygiene/FeminineHygiene";
import { ParallaxProvider } from "react-scroll-parallax";
import Articles from "@/components/sections/homepage/articles/Articles";
import GynaguardPromise from "@/components/sections/GynaguardPromise/GynaguardPromise";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import { fetchAPI } from "@/lib/api";
import { ApiHomePageHomePage } from "@/schemas";
import { useEffect, useMemo, useRef } from "react";
import { CategoryType, ProductType, SubCategoryType } from "@/types/products";
import { useMenu } from "@/context/menu";
import { useRouter } from "next/router";
import { useSubCategories } from "@/context/subCategories";
import { query } from "firebase/firestore";
import PageComponentBuilderController from "@/components/elements/ui/PageComponentBuilderController";

export default function Home({
  products,
  hero,
  categories,
  subcategories,
  newProducts,
  pageData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { setSubCategories, setNewProducts } = useSubCategories();
  useEffect(() => {
    setNewProducts(newProducts);
    setSubCategories(subcategories);
  }, [setSubCategories, subcategories]);

  // console.log(pageData, "pageData");
  const arcticlesRef = useRef(null);
  const feminineHygieneRef = useRef(null);
  const promiseRef = useRef(null);
  const productsRef = useRef(null);
  const links: {
    name: string;
    link: string;
    text: string;
    index: number;
  }[] = categories.map((category, idx) => ({
    name: category.name,
    link: category.name,
    text: category.description,
    index: idx - 1,
  }));

  const blogs = pageData.attributes.page_components
    .filter((item: any) => item.__component === "layout.blogs")
    .map((item: any) => {
      return item.blogs.data;
    })[0]
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

  const router = useRouter();
  const { section, page } = router.query;
  const { isReady } = router;

  //////if router.query.page === undefined, push the page to ?page=comfort
  useEffect(() => {
    if (isReady) {
      if (!page) {
        router.push(
          {
            pathname: "/",
            query: { ...router.query, page: "comfort" },
          },
          undefined,
          { scroll: false }
        );
      }
    }
  }, [page, isReady]);

  useEffect(() => {
    if (section === "hub") {
      window.scrollTo({
        top: arcticlesRef?.current?.offsetTop,

        behavior: "smooth",
      });
    }
    if (section === "promise") {
      window.scrollTo({
        top: promiseRef?.current?.offsetTop,

        behavior: "smooth",
      });
    }
    if (section === "feminine") {
      window.scrollTo({
        top: feminineHygieneRef?.current?.offsetTop,

        behavior: "smooth",
      });
    }
  }, [section]);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParallaxProvider>
        <main className="">
          <PageComponentBuilderController
            pageContent={pageData.attributes.page_components}
          />
          {/* <PageComponentBuilderController pageContent={pageData} /> */}
          {/* <HomePageHero links={links} /> */}
          {/* <div ref={productsRef} className="mt-8 mx-8">
            <Products products={products} />
          </div> */}
          <div ref={feminineHygieneRef} className="mt-8">
            <FeminineHygiene />
          </div>
          <div ref={arcticlesRef} className="md:mt-1">
            <Articles articles={blogs} />
          </div>
          <div ref={promiseRef}>
            <GynaguardPromise />
          </div>
        </main>
      </ParallaxProvider>
    </>
  );
}
export const getStaticProps: GetStaticProps<{
  products: ProductType[];
  // hero: any;
  categories: CategoryType[];
  subcategories: SubCategoryType[];
  newProducts: ProductType[];
  pageData: any;
}> = async (ctx) => {
  const productPopulate = ["products.products.image", "products.products"];

  const { data: categories } = await fetchAPI("categories");
  const { data: subcategories } = await fetchAPI("subcategories", ["products"]);
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
  const { data: pageData } = await fetchAPI("basi-pages/2", ["deep"]);

  return {
    props: {
      products,
      categories: categories.map((category: any) => ({
        ...category.attributes,
        id: category.id,
      })),

      subcategories: subcategories.map((subcategory: any) => ({
        ...subcategory.attributes,
        id: subcategory.id,
      })),
      newProducts,
      pageData,
    },
  };
};
