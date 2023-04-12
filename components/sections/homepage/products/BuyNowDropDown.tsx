import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutSide";
import Button from "@/components/elements/Button";
import Image from "next/image";
const options = ["newest", "oldest"];

const BuyNowDropDown = ({ isCarousel = false }: { isCarousel?: boolean }) => {
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
          className={` ${
            showDropDown ? "flex" : "hidden"
          }  w-full  flex-col items-center mt-2  right-0 absolute ${
            isCarousel
              ? "-bottom-[5rem] -2xl:bottom-[3rem]"
              : "-bottom-[7.7rem]"
          }  transition transition-all duration-300 ease `}
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
  );
};

export default BuyNowDropDown;
