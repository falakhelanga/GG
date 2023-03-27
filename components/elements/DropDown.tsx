import React from "react";

const DropDown = () => {
  return (
    <div className="flex flex-col w-[15rem] ">
      {[...Array(3)].map((_, idx) => {
        return (
          <div key={idx} className="w-full ">
            <div className="bg-gray-300 h-10 w-full h-full"></div>
          </div>
        );
      })}
    </div>
  );
};

export default DropDown;
