import Image from "next/image";
import Link from "next/link";
import React from "react";
import Title from "./Title";
import ReactMarkdown from "react-markdown";
import BuyNowDropDown from "@/components/sections/homepage/products/BuyNowDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
const ProductBlock = ({ product: productData }: { product: any }) => {
  const product = productData.data.attributes;

  return (
    <div className="flex w-full justify-center md:mb-14 mb-8">
      {" "}
      <div
        className={` md:cursor-pointer relative h-full flex-col flex md:flex-row  md:w-[80%]  md:justify-center  w-full`}
      >
        <Link href={`products-range/${product.id}`}>
          <Image
            height={200}
            width={200}
            alt="gynaguard product"
            src={`${product.image.data.attributes.url}`}
            className="h-full w-full"
          />
        </Link>

        <div className="h-full flex flex-col ">
          <Title
            className={`text-green uppercase my-5 font-semibold  overflow-hidden `}
          >
            {" "}
            <Link href={`products-range/${product.id}`}>
              <ReactMarkdown className=" overflow-hidden ">
                {product.name}
                {/* {truncate(70, product.name)} */}
              </ReactMarkdown>
            </Link>
          </Title>

          <ReactMarkdown
            // remarkPlugins={[gfm]}
            className={`flex-1  text-black prose  overflow-hidden marker:text-red-black leading-[1.3rem]`}
          >
            {product.subContentBullets}
          </ReactMarkdown>

          <div
            // href={`product-range/${product.id}`}
            className="uppercase font-medium my-5 text-black text-sm hover:text-pink font-semibold find-out-more "
          >
            <Link href={`products-range/${product.id}`}>
              <span className="">find out more</span>{" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-pink find-out-more-chevron"
              />
            </Link>
          </div>
          <div className="relative">
            <BuyNowDropDown product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
