import React from "react";

const SliderRightArrow = ({}: { color?: "pin" }) => {
  return (
    <div className="bg-[transparent] hover:bg-pink/[50%]  transition-all ease-in-out transition-duration-300 py-4 slider_arrow_container">
      <div className="w-[5rem] h-[5rem]">
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
        >
          <defs></defs>
          <path
            className="cls-1 fill-pink  slider_arrow"
            d="m371.19,240.69L133.94,1.3c-.82-.83-1.94-1.3-3.11-1.3s-2.29.47-3.11,1.3l-3.35,3.38c-1.69,1.71-1.69,4.46,0,6.17l236.17,238.29-237.82,239.96c-1.69,1.71-1.69,4.46,0,6.17l3.4,3.43c.82.83,1.94,1.3,3.11,1.3h0c1.17,0,2.29-.47,3.11-1.3l244.95-247.16c1.06-1.97,1.25-3.42-.39-5.33l-5.7-5.53Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SliderRightArrow;
