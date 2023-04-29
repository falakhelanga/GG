import Image from "next/image";
import React, { useRef, useState } from "react";
import Title from "../../../elements/ui/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import Button from "../../../elements/ui/Button";
import useClickOutside from "@/hooks/useClickOutSide";
import ReactMarkdown from "react-markdown";
import truncate from "@/helpers.tsx/textTruncate";
import { ProductType } from "@/types/products";
import Link from "next/link";
import BuyNowDropDown from "./BuyNowDropDown";

const Product = ({
  product,
  isCarousel = false,
  isBlogPage = false,
}: {
  product: ProductType;
  isCarousel?: boolean;
  isBlogPage?: boolean;
}) => {
  return (
    <div
      className={` md:cursor-pointer relative ${
        isCarousel ? "h-[40rem] min-h-[40rem]" : "h-full"
      }  flex-col flex  b `}
    >
      {isBlogPage && (
        <Link
          href={`products-range/${product.id}`}
          className=" justify-center flex"
        >
          <Image
            height={300}
            width={300}
            alt="gynaguard product"
            src={`${product.image.data.attributes.url}`}
            className=""
          />
        </Link>
      )}
      {!isBlogPage && (
        <Link href={`products-range/${product.id}`}>
          <Image
            height={200}
            width={200}
            alt="gynaguard product"
            src={`${product.image.data.attributes.url}`}
            className="h-full w-full"
          />
        </Link>
      )}

      <div className="h-full flex-1 flex flex-col">
        <Title
          className={`text-green uppercase my-5 font-semibold  overflow-hidden ${
            isCarousel && "md:h-[3.5rem]"
          }`}
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
          className={` ${
            isCarousel ? "md:h-[9rem] h-[9rem]" : "flex-1"
          } text-black prose  overflow-hidden marker:text-red-black leading-[1.3rem]`}
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
        <div>
          <BuyNowDropDown product={product} isCarousel={isCarousel} />
        </div>
      </div>
    </div>
  );
};

export default Product;
