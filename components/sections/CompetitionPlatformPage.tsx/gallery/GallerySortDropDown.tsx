import { faChevronDown } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutSide";
// const options = ["newest", "oldest"];

const GallerySortDropDown = ({
  sortValue,
  setSortValue,
  name,
  options,
}: {
  setSortValue: React.Dispatch<React.SetStateAction<any | null>>;
  sortValue: string | null;
  name: string;
  options: string[];
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showDropdown, setShowDropDown] = useState(false);

  const dropDownRef = useRef(null);
  useClickOutside(dropDownRef, () => {
    setShowDropDown(false);
  });

  return (
    <div className="flex flex-col relative items-center md:mt-0 mt-2 ">
      <div
        ref={dropDownRef}
        onClick={() => {
          setShowDropDown(true);
        }}
        className="md:w-full w-full h-10 bg-white rounded-md items-center flex justify-around md:cursor-pointer"
      >
        <span className="">{name}:</span>
        <span className="capitalize text-pink ">{sortValue}</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-pink" />
      </div>
      {showDropdown && (
        <div className="flex flex-col w-full items-center absolute  md:w-[90%] top-10 z-[5]">
          <div
            style={{
              width: 0,
              height: 0,
              borderWidth: "0 8px 8px 8px",

              borderStyle: "solid",
            }}
            className="border gallery-dropdown-triangle"
          ></div>

          <div className="w-full rounded-md overflow-hidden md:cursor-pointer">
            {options.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    setSortValue(item as any);
                  }}
                  key={idx}
                  className={`w-full flex flex-col items-center  }`}
                >
                  <div
                    className={` ${
                      idx === 0 && "first-drop-down-item-gallery"
                    } ${sortValue === item ? "bg-[#f1ecee]" : "bg-white"}
                   hover:bg-[#f1ecee]  h-10 w-full border-b border-b-[#f5f5f5] border-b-1 text-pink flex justify-center text-center items-center py-4 capitalize `}
                  >
                    {item}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySortDropDown;
