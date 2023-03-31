import Image from "next/image";
import React, { useRef, useState } from "react";
import Title from "../../../elements/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import Button from "../../../elements/Button";
import { SwiperSlide } from "swiper/react";
import GallerySortDropDown from "../../../elements/GallerySortDropDown";
import BuyNowDropDown from "./BuyNowDropDown";
import useClickOutside from "@/hooks/useClickOutSide";

const Product = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const buyNowBtnRef = useRef(null);
  useClickOutside(buyNowBtnRef, () => {
    setShowDropDown(false);
  });
  return (
    <div className=" cursor-pointer relative h-auto">
      <Image
        height={200}
        width={200}
        alt="gynaguard product"
        src="/images/gynaguard-product.png"
        className="h-full w-full"
      />
      <div className="">
        <Title className="text-green uppercase my-5 font-semibold">
          essential daily comfort intimate wash
        </Title>
        <ul className="list-disc pl-4 text-brown">
          <li>Sensitive formula</li>
          <li>Rinse away odour-causing germs</li>
          <li>Fragrance free</li>
        </ul>
        <div className="uppercase font-medium my-5 text-black text-sm hover:text-pink font-semibold find-out-more ">
          <span className="">find out more</span>{" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-pink find-out-more-chevron"
          />
        </div>
        <div className="r">
          <div ref={buyNowBtnRef}>
            <Button
              style={{
                backgroundColor: showDropDown && "#DD2E64",
              }}
              onClick={() => {
                setShowDropDown((currState) => !currState);
              }}
              fullWidth
              variant="outline"
              className={`uppercase   ${
                showDropDown && "bg-darkPink text-white"
              }`}
            >
              buy now
            </Button>
          </div>

          <div>
            <div
              className={` ${
                showDropDown ? "flex" : "hidden"
              }  w-full  flex-col items-center mt-2  right-0 absolute -bottom-[7.7rem] transition transition-all duration-300 ease `}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderWidth: "0 8px 8px 8px",
                  borderColor: "transparent transparent #E9608A transparent",
                  borderStyle: "solid",
                }}
                className="border gallery-dropdown-triangle -mt-1"
              ></div>
              <div className="rounded-md overflow-hidden  w-full">
                <div className="bg-pink py-3 border-b border-b-gray-[#d9d9d9] border-b-1 flex justify-center hover:bg-darkPink">
                  <Image
                    height={110}
                    width={110}
                    src="/images/Clicks SVG.svg"
                    alt=""
                  />
                </div>
                <div className="bg-pink hover:bg-darkPink py-3 border-b border-b-gray-[#d9d9d9] border-b-1 flex justify-center">
                  <Image
                    height={80}
                    width={80}
                    src="/images/Dischem SVG.svg"
                    alt=""
                  />
                </div>
                <div className="bg-pink hover:bg-darkPink py-3 border-b border-b-gray-[#d9d9d9] border-b-1 flex justify-center">
                  <Image
                    height={80}
                    width={80}
                    src="/images/Checkers SVG.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
