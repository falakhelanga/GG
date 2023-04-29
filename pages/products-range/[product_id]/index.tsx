import Button from "@/components/elements/ui/Button";
import GynaguardPromise from "@/components/sections/GynaguardPromise/GynaguardPromise";
import Title from "@/components/elements/ui/Title";
import ContentWrap from "@/components/elements/ui/ContentWrap";
import BuyNowDropDown from "@/components/sections/homepage/products/BuyNowDropDown";
import Reviews from "@/components/sections/products-range/Reviews";
import { fetchAPI } from "@/lib/api";
import {
  CategoryType,
  GynaguardPromiseType,
  ProductType,
  SubCategoryType,
} from "@/types/products";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { default as _ReactPlayer } from "react-player/youtube";
import { ReactPlayerProps } from "react-player/types/lib";
import Link from "next/link";
import truncate from "@/helpers.tsx/textTruncate";
import { useSubCategories } from "@/context/subCategories";
import ReactPlayer from "react-player";
const IndividualProduct = ({
  product,
  subcategories,
  newProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const reviews = product.reviews.data.map((review: any) => ({
    ...review?.attributes,
    id: review.id,
  }));
  const { setSubCategories, setNewProducts } = useSubCategories();
  useEffect(() => {
    setNewProducts(newProducts);
    setSubCategories(subcategories);
  }, [setSubCategories, subcategories, setNewProducts, newProducts]);

  const gynaguardPromise: GynaguardPromiseType | null = product
    .gynaguard_promise.data
    ? {
        ...product.gynaguard_promise.data?.attributes,
        id: product.gynaguard_promise.id,
      }
    : null;

  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <ContentWrap className="mt-[7rem]">
          <div className="uppercase flex items-center gap-2 text-sm text-black max-sm:text-xs">
            <Link className="hover:text-pink" href="/products-range">
              products
            </Link>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-pink text-xs"
            />
            <Link
              className="hover:text-pink"
              href={`/products-range?page=${product.category.data?.attributes?.name}`}
            >
              {product.category.data?.attributes?.name}
            </Link>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-pink text-xs"
            />
            <span className="font-bold md:hidden block">
              {" "}
              {truncate(15, product.name)}{" "}
            </span>
            <span className="font-bold md:block hidden">{product.name}</span>
          </div>

          <div className="grid md:grid-cols-2 mt-12 gap-4">
            <div className="h-full w-full relative">
              <Image
                className="h-full w-full"
                alt={product.name}
                height={1000}
                width={1000}
                src={`${product.image.data?.attributes?.url}`}
              />
              {gynaguardPromise && (
                <>
                  <Image
                    className="absolute top-0 right-8 md:block hidden"
                    src={`${gynaguardPromise.badge.data?.attributes?.url}`}
                    alt={gynaguardPromise.text}
                    height={170}
                    width={170}
                  />
                  <Image
                    className="absolute top-0 right-8 md:hidden block"
                    src={`${gynaguardPromise.badge.data?.attributes?.url}`}
                    alt={gynaguardPromise.text}
                    height={100}
                    width={100}
                  />
                </>
              )}
            </div>
            <div className="h-full w-full ">
              <div className="text-pink uppercase font-normal text-3xl md:text-4xl">
                Gynaguard
              </div>
              <ReactMarkdown className="text-green md:text-5xl text-4xl font-semibold mt-3 prose">
                {product.name}
              </ReactMarkdown>
              <ReactMarkdown className=" my-6 font-bold text-black prose">
                {product.quantities}
              </ReactMarkdown>
              <ReactMarkdown className="   text-black prose">
                {product.description}
              </ReactMarkdown>
              <ReactMarkdown className="   text-black my-6 prose">
                {product.subContent}
              </ReactMarkdown>
              <ReactMarkdown className="   text-black mb-6 prose -ml-3 leading-[1.3rem]">
                {product.subContentBullets}
              </ReactMarkdown>
              <div className="md:w-[50%] relative">
                <BuyNowDropDown product={product} />
              </div>
            </div>
          </div>
          <div className="md:my-[5rem] my-[3rem] ">
            <Reviews reviews={reviews} />
          </div>
        </ContentWrap>
        <div className="  w-full flex-1 flex flex-col items-center justify-center bg-[#f2f1f0] object-cover md:h-[65vh] h-auto relative md:mt-[8rem]">
          <div className="md:w-[50%] w-full  md:-mt-[3rem] h-full">
            <ReactPlayer
              className="react-player aspect-video "
              height={"100%"}
              width={"100%"}
              url={`http://127.0.0.1:1337/uploads/pexels_zura_narimanishvili_5490419_1920x1080_25fps_87c8504875.mp4`}
              controls
            />
          </div>

          <ContentWrap className="w-full text-center text-green font-bold md:text-lg md:my-8 my-4">
            {product.name}
          </ContentWrap>
        </div>
        <div>
          <GynaguardPromise />
        </div>
      </div>
    </>
  );
};

export default IndividualProduct;

export async function getStaticPaths() {
  const { data } = await fetchAPI("products");

  const products: ProductType[] = data.map((product: any) => ({
    ...product?.attributes,
    id: product.id,
  }));
  const paths = products.map((product) => ({
    params: { product_id: product.id.toString() },
  }));
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps<{
  product: ProductType;
  subcategories: SubCategoryType[];
  newProducts: ProductType[];
}> = async (ctx) => {
  const pagePopulate = [
    "image",
    "reviews",
    "category",
    "gynaguard_promise",
    "gynaguard_promise.badge",
  ];

  const productId = ctx?.params?.product_id;
  const { data } = await fetchAPI(`products/${productId}`, pagePopulate);
  const { data: subcategories } = await fetchAPI("subcategories", ["products"]);
  // const { data: gynaguardPromises } = await fetchAPI("gynaguard-promises", [
  //   "badge",
  // ]);
  const productPopulate = ["products.products.image", "products.products"];
  const { data: productsData } = await fetchAPI(
    "products-range",
    productPopulate
  );
  const products: ProductType[] =
    productsData?.attributes?.products.products.data.map((product: any) => ({
      ...product?.attributes,
      id: product.id,
    }));
  const newProducts = products.filter((product) => product.isNew);
  const product = data?.attributes;
  return {
    props: {
      newProducts,
      product,
      subcategories: subcategories.map((subcategory: any) => ({
        ...subcategory?.attributes,
        id: subcategory.id,
      })),
    },
  };
};
