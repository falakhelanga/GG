import ContentWrap from "@/components/elements/ui/ContentWrap";
import PageHeader from "@/components/elements/ui/PageHeader";
import CompetitionPageNav from "@/components/sections/CompetitionPlatformPage.tsx/CompetitionPageNav.tsx/CompetitionPageNav";
import { useSubCategories } from "@/context/subCategories";
import { fetchAPI } from "@/lib/api";
import { ProductType, SubCategoryType } from "@/types/products";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React, { useEffect } from "react";

const Faq = ({
  subcategories,
  newProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { setSubCategories, setNewProducts } = useSubCategories();
  useEffect(() => {
    setNewProducts(newProducts);
    setSubCategories(subcategories);
  }, [setSubCategories, subcategories, setNewProducts, newProducts]);
  return (
    <>
      <Head>
        <title>FAQ&apos;S</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader headerData={""} />
      <div className=" ">
        {/* <CompetitionPageNav /> */}
        <div className=" pb-14">
          <ContentWrap className="pt-14 flex-col items-center ">
            <div className="text-5xl flex flex-col items-center">
              <div
                className="
      md:text-5xl text-4xl uppercase text-pink
      "
              >
                ABOUT &
              </div>
              <div className="font-paul text-green md:text-8xl text-7xl -mt-6">
                faq page
              </div>
            </div>
            <div className="my-14 text-brown text-center">
              <p className="text-lg">
                Have questions? Find some answers below.
              </p>
              <p className="text-sm">
                {"if you don't find what you need, you can email us at"}
                <a className="text-pink" href="mailto:help@gynaguard.co.za">
                  help@gynaguard.co.za
                </a>
              </p>
            </div>
            <div>
              <div>
                <h1 className="max-sm:text-center text-green font-semibold text-lg ">
                  ABOUT THE COMPETITION
                </h1>
                <div className="text-brown max-sm:text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequuntur laborum qui excepturi architecto dolorum pariatur
                  maiores corrupti id eos, aut suscipit, ex adipisci omnis
                  recusandae est. Labore aliquam similique quam ad omnis eveniet
                  provident officia odio ratione delectus facere nulla eius,
                  sint molestiae, quas sequi beatae enim, officiis praesentium!
                  Praesentium ipsam eaque nemo. Natus possimus illum vitae
                  ratione accusamus dolore quos quas aspernatur, optio neque
                  unde officiis quibusdam id. Delectus illum voluptatem
                  voluptatum ducimus dolores, unde quibusdam commodi accusantium
                  voluptates ad est facere molestias explicabo autem tempora
                  adipisci modi nesciunt? Consequatur laudantium commodi
                  sapiente dolor sint optio? Cupiditate, assumenda hic!
                </div>
              </div>
              <div className="my-8 h-[2px] w-full bg-[#B1B0B0]"></div>
              <div className="mb-8">
                <h1 className="text-brown font-semibold text-lg ">
                  1.FAQ TOPIC OF DISCUSSION HERE
                </h1>
                <div className="text-brown ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequuntur laborum qui excepturi architecto dolorum pariatur
                  maiores corrupti id eos, aut suscipit, ex adipisci omnis
                  recusandae est. Labore aliquam similique quam ad omnis eveniet
                  provident officia odio ratione delectus facere nulla eius,
                  sint molestiae, quas sequi beatae enim, officiis praesentium!
                  Praesentium ipsam eaque nemo. Natus possimus illum vitae
                  ratione accusamus dolore quos quas aspernatur, optio neque
                  unde officiis quibusdam id. Delectus illum voluptatem
                  voluptatum ducimus dolores, unde quibusdam commodi accusantium
                  voluptates ad est facere molestias explicabo autem tempora
                  adipisci modi nesciunt? Consequatur laudantium commodi
                  sapiente dolor sint optio? Cupiditate, assumenda hic!
                </div>
              </div>
              <div className="mb-8">
                <h1 className="text-brown font-semibold text-lg ">
                  2.FAQ TOPIC OF DISCUSSION HERE
                </h1>
                <div className="text-brown ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequuntur laborum qui excepturi architecto dolorum pariatur
                  maiores corrupti id eos, aut suscipit, ex adipisci omnis
                  recusandae est. Labore aliquam similique quam ad omnis eveniet
                  provident officia odio ratione delectus facere nulla eius,
                  sint molestiae, quas sequi beatae enim, officiis praesentium!
                  Praesentium ipsam eaque nemo. Natus possimus illum vitae
                  ratione accusamus dolore quos quas aspernatur, optio neque
                  unde officiis quibusdam id. Delectus illum voluptatem
                  voluptatum ducimus dolores, unde quibusdam commodi accusantium
                  voluptates ad est facere molestias explicabo autem tempora
                  adipisci modi nesciunt? Consequatur laudantium commodi
                  sapiente dolor sint optio? Cupiditate, assumenda hic!
                </div>
              </div>
              <div className="mb-8">
                <h1 className="text-brown font-semibold text-lg ">
                  3.FAQ TOPIC OF DISCUSSION HERE
                </h1>
                <div className="text-brown ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequuntur laborum qui excepturi architecto dolorum pariatur
                  maiores corrupti id eos, aut suscipit, ex adipisci omnis
                  recusandae est. Labore aliquam similique quam ad omnis eveniet
                  provident officia odio ratione delectus facere nulla eius,
                  sint molestiae, quas sequi beatae enim, officiis praesentium!
                  Praesentium ipsam eaque nemo. Natus possimus illum vitae
                  ratione accusamus dolore quos quas aspernatur, optio neque
                  unde officiis quibusdam id. Delectus illum voluptatem
                  voluptatum ducimus dolores, unde quibusdam commodi accusantium
                  voluptates ad est facere molestias explicabo autem tempora
                  adipisci modi nesciunt? Consequatur laudantium commodi
                  sapiente dolor sint optio? Cupiditate, assumenda hic!
                </div>
              </div>
              <div className="mb-8">
                <h1 className="text-brown font-semibold text-lg ">
                  4.FAQ TOPIC OF DISCUSSION HERE
                </h1>
                <div className="text-brown ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequuntur laborum qui excepturi architecto dolorum pariatur
                  maiores corrupti id eos, aut suscipit, ex adipisci omnis
                  recusandae est. Labore aliquam similique quam ad omnis eveniet
                  provident officia odio ratione delectus facere nulla eius,
                  sint molestiae, quas sequi beatae enim, officiis praesentium!
                  Praesentium ipsam eaque nemo. Natus possimus illum vitae
                  ratione accusamus dolore quos quas aspernatur, optio neque
                  unde officiis quibusdam id. Delectus illum voluptatem
                  voluptatum ducimus dolores, unde quibusdam commodi accusantium
                  voluptates ad est facere molestias explicabo autem tempora
                  adipisci modi nesciunt? Consequatur laudantium commodi
                  sapiente dolor sint optio? Cupiditate, assumenda hic!
                </div>
              </div>
              <div className="mb-8">
                <h1 className="text-brown font-semibold text-lg ">
                  5.FAQ TOPIC OF DISCUSSION HERE
                </h1>
                <div className="text-brown ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequuntur laborum qui excepturi architecto dolorum pariatur
                  maiores corrupti id eos, aut suscipit, ex adipisci omnis
                  recusandae est. Labore aliquam similique quam ad omnis eveniet
                  provident officia odio ratione delectus facere nulla eius,
                  sint molestiae, quas sequi beatae enim, officiis praesentium!
                  Praesentium ipsam eaque nemo. Natus possimus illum vitae
                  ratione accusamus dolore quos quas aspernatur, optio neque
                  unde officiis quibusdam id. Delectus illum voluptatem
                  voluptatum ducimus dolores, unde quibusdam commodi accusantium
                  voluptates ad est facere molestias explicabo autem tempora
                  adipisci modi nesciunt? Consequatur laudantium commodi
                  sapiente dolor sint optio? Cupiditate, assumenda hic!
                </div>
              </div>
            </div>
          </ContentWrap>
        </div>
      </div>
    </>
  );
};

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

export default Faq;
