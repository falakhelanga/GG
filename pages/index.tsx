import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CompetitionPageNav from "@/components/sections/CompetitionPlatformPage.tsx/CompetitionPageNav.tsx/CompetitionPageNav";
import DropDown from "@/components/elements/GallerySortDropDown";
import HomePageHero from "@/components/sections/homepage/homePageHero/HomePageHero";
import Products from "@/components/sections/homepage/products/Products";
import FeminineHygiene from "@/components/sections/homepage/feminineHygiene/FeminineHygiene";
import { ParallaxProvider } from "react-scroll-parallax";
import Articles from "@/components/sections/homepage/articles/Articles";
import GynaguardPromise from "@/components/elements/GynaguardPromise/GynaguardPromise";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import { fetchAPI } from "@/lib/api";
import { ApiHomePageHomePage } from "@/schemas";
import { useEffect, useMemo, useRef } from "react";
import { CategoryType, ProductType, SubCategoryType } from "@/types/products";
import { useMenu } from "@/context/menu";
import { useRouter } from "next/router";
import { useSubCategories } from "@/context/subCategories";

export default function Home({
  products,
  hero,
  categories,
  subcategories,
  newProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { setSubCategories, setNewProducts } = useSubCategories();
  useEffect(() => {
    setNewProducts(newProducts);
    setSubCategories(subcategories);
  }, [setSubCategories, subcategories]);
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

  const router = useRouter();
  const { section, page } = router.query;

  //////if router.query.page === undefined, push the page to ?page=comfort
  useEffect(() => {
    if (!page) {
      router.push("?page=comfort");
    }
  }, []);

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
          <HomePageHero heroData={hero} links={links} />
          <div ref={productsRef} className="mt-8 mx-8">
            <Products products={products} />
          </div>
          <div ref={feminineHygieneRef} className="md:mt-16 mt-4">
            <FeminineHygiene />
          </div>
          <div ref={arcticlesRef} className="mt-1">
            <Articles />
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
  hero: any;
  categories: CategoryType[];
  subcategories: SubCategoryType[];
  newProducts: ProductType[];
}> = async (ctx) => {
  const pagePopulate = [
    "hero",
    "hero.desktopImages",
    "hero.mobileImages",
    "hero.button",
    "hero.button.button_variant",
    "hero.button.color",
    "products",
    "products.image",
    // "products.products",
  ];
  const { data } = await fetchAPI("home-page", pagePopulate);
  const { data: categories } = await fetchAPI("categories");
  const { data: subcategories } = await fetchAPI("subcategories", ["products"]);
  const products: ProductType[] = data.attributes.products.data.map(
    (product: any) => ({ ...product.attributes, id: product.id })
  );
  const newProducts = products.filter((product) => product.isNew);
  const hero = data.attributes.hero;

  return {
    props: {
      products,
      categories: categories.map((category: any) => ({
        ...category.attributes,
        id: data.id,
      })),
      hero,
      subcategories: subcategories.map((subcategory: any) => ({
        ...subcategory.attributes,
        id: subcategory.id,
      })),
      newProducts,
    },
  };
};
