import Image from "next/image";
import React from "react";
import Title from "../Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import Button from "../Button";
import { SwiperSlide } from "swiper/react";
import GallerySortDropDown from "../GallerySortDropDown";
import BuyNowDropDown from "./BuyNowDropDown";

const Product = () => {
  return (
    <div className="overflow-hidden cursor-pointer ">
      <Image
        height={200}
        width={200}
        alt="gynaguard product"
        src="/images/gynaguard-product.png"
        className="h-full w-full"
      />
      <div>
        <Title className="text-green uppercase my-5 font-medium">
          essential daily comfort intimate wash
        </Title>
        <ul className="list-disc pl-4 text-brown">
          <li>Sensitive formula</li>
          <li>Rinse away odour-causing germs</li>
          <li>Fragrance free</li>
        </ul>
        <div className="uppercase font-medium my-5 text-black text-sm hover:text-pink hover:font-semibold find-out-more ">
          <span className="">find out more</span>{" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-pink find-out-more-chevron"
          />
        </div>
        <Button fullWidth variant="outline" className="uppercase">
          buy now
        </Button>
        <BuyNowDropDown />
      </div>
    </div>
  );
};

export default Product;
