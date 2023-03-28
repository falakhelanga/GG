import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutSide";
const options = ["newest", "oldest"];

const BuyNowDropDown = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showDropdown, setShowDropDown] = useState(false);

  const dropDownRef = useRef(null);
  useClickOutside(dropDownRef, () => {
    setShowDropDown(false);
  });

  return (
    <div className="flex flex-col relative items-center md:mt-0 mt-2 ">
      <div className="flex flex-col md:w-[15rem] w-full items-center absolute md:left-7 top-10 z-[5]">
        <div
          style={{
            width: 0,
            height: 0,
            borderWidth: "0 8px 8px 8px",

            borderStyle: "solid",
          }}
          className="border gallery-dropdown-triangle"
        ></div>

        <div className="w-full rounded-md overflow-hidden cursor-pointer">
          {options.map((item, idx) => {
            return (
              <div key={idx} className={`w-full flex flex-col items-center  }`}>
                <div
                  className={`${idx === 0 && "first-drop-down-item-gallery"}
                   hover:bg-[#f1ecee] bg-white h-10 w-full border-b border-b-[#f5f5f5] border-b-1 text-pink flex justify-center text-center items-center py-4 capitalize`}
                >
                  {item}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BuyNowDropDown;
