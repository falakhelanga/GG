import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutSide";
import Button from "@/components/elements/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProductType } from "@/types/products";
const options = ["newest", "oldest"];

const BuyNowDropDown = ({
  isCarousel = false,
  product,
}: {
  isCarousel?: boolean;
  product: ProductType;
}) => {
  const [variant, setVariant] = React.useState("hidden");
  const buyNowBtnRef = useRef(null);
  useClickOutside(buyNowBtnRef, () => {
    setVariant("hidden");
  });
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0,
      onanimationend: {
        display: "none",
      },
    },
    shown: {
      opacity: 1,
      scale: 1,
      display: "block",
    },
  };
  return (
    <div className="">
      <div ref={buyNowBtnRef}>
        <Button
          style={{
            backgroundColor: variant === "shown" && "#DD2E64",
          }}
          onClick={() => {
            setVariant((prevVariant) =>
              prevVariant === "hidden" ? "shown" : "hidden"
            );
            // setShowDropDown((currState) => !currState);
          }}
          fullWidth
          variant="outline"
          className={`uppercase max-sm:cursor-none  ${
            variant === "shown" && "bg-darkPink text-white"
          }`}
        >
          buy now
        </Button>
      </div>

      <motion.div animate={variant} initial="hidden" variants={variants}>
        <div
          className={` flex   w-full  flex-col items-center mt-2  right-0 absolute mt-[0.4rem]   transition transition-all duration-300 ease z-10 `}
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
            <a
              href={product.clicksLink}
              target="_blank"
              className="bg-pink py-3 border-b border-b-gray-[#d9d9d9] border-b-1 flex justify-center hover:bg-darkPink"
            >
              <img src="/images/Clicks SVG.svg" alt="" className=" w-[8rem]" />
            </a>
            <a
              target="_blank"
              href={product.dischemLink}
              className="bg-pink hover:bg-darkPink py-3 border-b border-b-gray-[#d9d9d9] border-b-1 flex justify-center"
            >
              <img
                src="/images/Dischem SVG.svg"
                alt=""
                className=" w-[8rem] h-[0.9rem]"
              />
            </a>
            <a
              target="_blank"
              href={product.checkersLink}
              className="bg-pink hover:bg-darkPink py-3 border-b border-b-gray-[#d9d9d9] border-b-1 flex justify-center"
            >
              <img
                src="/images/Checkers SVG.svg"
                alt=""
                className=" w-[8rem] h-[0.9rem]"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BuyNowDropDown;
