import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutSide";
import Button from "@/components/elements/Button";
import Image from "next/image";
import { ProductType } from "@/types/products";
const options = ["newest", "oldest"];

const BuyNowDropDown = ({
  isCarousel = false,
  product,
}: {
  isCarousel?: boolean;
  product: ProductType;
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const buyNowBtnRef = useRef(null);
  useClickOutside(buyNowBtnRef, () => {
    setShowDropDown(false);
  });

  return (
    <div className="">
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
          className={`uppercase   ${showDropDown && "bg-darkPink text-white"}`}
        >
          buy now
        </Button>
      </div>

      <div>
        <div
          className={`  ${
            showDropDown ? "flex" : "hidden"
          }  w-full  flex-col items-center mt-2  right-0 absolute mt-[0.4rem]   transition transition-all duration-300 ease z-10 `}
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
      </div>
    </div>
  );
};

export default BuyNowDropDown;
