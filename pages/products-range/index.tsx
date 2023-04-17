import GynaguardPromise from "@/components/elements/GynaguardPromise/GynaguardPromise";
import Logo from "@/components/elements/Logo";
import ContentWrap from "@/components/elements/layout/ContentWrap";
import ProductsRange from "@/components/sections/products-range/ProductsRange";
import Reviews from "@/components/sections/products-range/Reviews";
import Tips from "@/components/sections/products-range/Tips";
import { useSubCategories } from "@/context/subCategories";
import { fetchAPI } from "@/lib/api";
import { ApiProductsRangeProductsRange } from "@/schemas";
import {
  CategoryType,
  ProductType,
  ReviewType,
  SubCategoryType,
} from "@/types/products";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";

const sliderWidth = 7;

const ProductRangePage = ({
  data,
  products,
  categories,
  subcategories,
  newProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
  const { page } = router.query;
  const description = links.find((link) => link.link === page) || links[0];
  const [sliderPosition, setSliderPosition] = useState(0);
  const [slideCurrentIndex, setSlideCurrentIndex] = useState(1);
  const [activeTab, setActiveTab] = useState(1);

  const pageProducts = useMemo(() => {
    return products.filter((item: any) => {
      return item.category.data.attributes.name === page;
    });
  }, [products, data]);

  const reviews = pageProducts.map((product: any) => {
    return product.reviews;
  });

  const reviewsArray = reviews
    .reduce((acc: any, curr: any) => {
      return acc.concat(curr);
    }, [])
    .reduce((acc: any, curr: any) => {
      for (const review of curr.data) {
        acc.push(review);
      }
      return acc;
    }, [])
    .map((review: any) => ({ ...review.attributes, id: review.id }));

  const moveSlider = (index: number) => {
    setSliderPosition(190 * index);
  };
  const { setSubCategories, setNewProducts } = useSubCategories();
  useEffect(() => {
    setNewProducts(newProducts);
    setSubCategories(subcategories);
  }, [setSubCategories, subcategories, setNewProducts, newProducts]);
  //////if router.query.page === undefined, push the page to ?page=comfort
  useEffect(() => {
    if (!page) {
      router.push("?page=comfort");
    }
  }, []);

  ////// set tab index on page mount
  useEffect(() => {
    if (router.isReady) {
      const tab = links.find((link) => link.link === page);
      if (tab) {
        setSlideCurrentIndex(tab.index);
        setActiveTab(tab.index);
      } else {
        setSlideCurrentIndex(-1);
        setActiveTab(-1);
      }
    }
  }, [router, page]);

  /////// move the tab slider when the index change
  useEffect(() => {
    moveSlider(slideCurrentIndex);
  }, [slideCurrentIndex]);

  return (
    <>
      <Head>
        <title>Product Range</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex flex-col items-center mt-[6rem]  ">
        <div className="flex max-sm:flex-col max-sm:items-center gap-3 items-end justify-center md:my-12 my-5">
          <Logo color="pink" height={300} width={300} />
          <h1 className="text-pink font-medium md:text-[2.5em] text-4xl uppercase  flex items-end h-full leading-10">
            product range
          </h1>
        </div>
        <div className="flex flex-col w-full ">
          <div className="flex flex-col uppercase w-full   items-center max-sm:text-center text-black md:text-lg text-md border-b border-b-green  ">
            <div className="flex max-sm:gap-4  ">
              {links.map((item, idx) => {
                return (
                  <Link
                    key={item.name}
                    href={`?page=${item.name}`}
                    onMouseEnter={() => {
                      setSlideCurrentIndex(item.index);
                      // if (router.route === item.link) return;
                    }}
                    onMouseLeave={() => {
                      setSlideCurrentIndex(activeTab);
                    }}
                    className={`hover:text-green ${
                      page === item.link &&
                      "max-sm:border-b max-sm:border-b-green max-sm:border-b-8"
                    } ${
                      !page &&
                      idx === 0 &&
                      "max-sm:border-b max-sm:border-b-green max-sm:border-b-8 "
                    } relative md:px-12 px-5 `}
                    scroll={false}
                  >
                    <span
                      className={`font-bold ${
                        page === item.link && "text-green"
                      } ${!page && idx === 0 && "text-green"} `}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div
              style={{
                transform: `translateX(${sliderPosition}px)`,
                width: `${sliderWidth}rem`,
              }}
              className="bg-green h-2 transition-all duration-700 ease-out md:block hidden"
            ></div>
          </div>
          <div className="text-brown text-center my-5">{description.text}</div>
        </div>

        {/* products range */}
        <ContentWrap className="mt-14 overflow-hidden">
          <ProductsRange products={pageProducts} />
          <div className="mt-[5rem]">
            <Reviews reviews={reviewsArray} />
          </div>
        </ContentWrap>
        <div className="bg-gradient-to-b from-[#E9E7E6] to-[#E7D4DB] w-full py-8 mt-14">
          <Tips />
        </div>
        <GynaguardPromise />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  data: ApiProductsRangeProductsRange;
  products: ProductType[];
  categories: CategoryType[];
  subcategories: SubCategoryType[];
  newProducts: ProductType[];
}> = async (ctx) => {
  const pagePopulate = [
    "products.products.image",
    "products.products",
    "products.products.reviews",
    "products.products.category",
  ];
  const { data } = await fetchAPI("products-range", pagePopulate);
  const { data: subcategories } = await fetchAPI("subcategories", ["products"]);
  const { data: categories } = await fetchAPI("categories");
  const products: ProductType[] = data.attributes.products.products.data.map(
    (product: any) => ({ ...product.attributes, id: product.id })
  );
  const newProducts = products.filter((product) => product.isNew);
  products.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
  });
  return {
    props: {
      data,
      products,
      newProducts,
      categories: categories.map((category: any) => ({
        ...category.attributes,
        id: category.id,
      })),
      subcategories: subcategories.map((subcategory: any) => ({
        ...subcategory.attributes,
        id: subcategory.id,
      })),
    },
  };
};
export default ProductRangePage;
