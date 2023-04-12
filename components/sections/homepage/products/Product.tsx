import Image from "next/image";
import React, { useRef, useState } from "react";
import Title from "../../../elements/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import Button from "../../../elements/Button";
import useClickOutside from "@/hooks/useClickOutSide";
import ReactMarkdown from "react-markdown";
import truncate from "@/helpers.tsx/textTruncate";
import { ProductType } from "@/types/products";
import Link from "next/link";
import BuyNowDropDown from "./BuyNowDropDown";

const Product = ({
  product,
  isCarousel = false,
}: {
  product: ProductType;
  isCarousel?: boolean;
}) => {
  console.log(product, "l");
  return (
    <div
      className={` md:cursor-pointer relative ${
        isCarousel ? "h-[40rem] min-h-[40rem]" : "h-full"
      }  flex-col flex  b `}
    >
      <Link href={`products-range/${product.id}`}>
        <Image
          height={200}
          width={200}
          alt="gynaguard product"
          src={product.image.data.attributes.url}
          className="h-full w-full"
        />
      </Link>

      <div className="h-full flex-1 flex flex-col">
        <Title
          className={`text-green uppercase my-5 font-semibold  overflow-hidden ${
            isCarousel && "h-[2rem]"
          }`}
        >
          {" "}
          <Link href={`products-range/${product.id}`}>
            <ReactMarkdown className=" overflow-hidden ">
              {truncate(70, product.name)}
            </ReactMarkdown>
          </Link>
        </Title>

        <ReactMarkdown
          // remarkPlugins={[gfm]}
          className={` ${
            isCarousel ? "md:h-[9rem]" : "flex-1"
          } text-brown prose  overflow-hidden`}
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
          <BuyNowDropDown isCarousel={isCarousel} />
        </div>
      </div>
    </div>
  );
};

export default Product;
