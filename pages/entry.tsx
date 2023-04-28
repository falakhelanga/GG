import CompetitionPageNav from "@/components/sections/CompetitionPlatformPage.tsx/CompetitionPageNav.tsx/CompetitionPageNav";
import EntryForm from "@/components/sections/CompetitionPlatformPage.tsx/EntryForm/EntryForm";
import HowToEnter from "@/components/sections/CompetitionPlatformPage.tsx/EntryForm/HowToEnter";
import { useSubCategories } from "@/context/subCategories";
import { fetchAPI } from "@/lib/api";
import { ProductType, SubCategoryType } from "@/types/products";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React, { useEffect } from "react";

const Entry = ({
  newProducts,
  subcategories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { setSubCategories, setNewProducts } = useSubCategories();
  useEffect(() => {
    setNewProducts(newProducts);
    setSubCategories(subcategories);
  }, [setSubCategories, subcategories, setNewProducts, newProducts]);
  return (
    <>
      <Head>
        <title>Entry</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <CompetitionPageNav />
        <HowToEnter />

        <EntryForm />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  subcategories: SubCategoryType[];
  newProducts: ProductType[];
}> = async (ctx) => {
  const { data: subcategories } = await fetchAPI("subcategories", ["products"]);
  const productPopulate = ["image", "products"];
  const { data: productsData } = await fetchAPI("products", productPopulate);

  const products: ProductType[] = productsData.map((product: any) => ({
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

export default Entry;
