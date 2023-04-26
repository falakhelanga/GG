import React from "react";

const SliderLeftArrow = ({}: { color?: "pin" }) => {
  return (
    <div className="bg-[transparent] hover:bg-pink/[50%] transition-all ease-in-out transition-duration-300 py-4 slider_arrow_container">
      <div className="w-[5rem] h-[5rem]">
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
        >
          <defs></defs>
          <path
            className="cls-1 fill-pink slider_arrow"
            d="m128.58,259.31l237.25,239.39c.82.83,1.94,1.3,3.11,1.3s2.29-.47,3.11-1.3l3.35-3.38c1.69-1.71,1.69-4.46,0-6.17l-236.17-238.29L377.06,10.9c1.69-1.71,1.69-4.46,0-6.17l-3.4-3.43C372.84.47,371.72,0,370.55,0h0c-1.17,0-2.29.47-3.11,1.3L122.49,248.46c-1.06,1.97-1.25,3.42.39,5.33l5.7,5.53Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SliderLeftArrow;
