import ContentWrap from "@/components/elements/layout/ContentWrap";
import Image from "next/image";
import React from "react";

const HowToEnter = () => {
  return (
    <div className="flex justify-center content-center min-h-screen h-fit bg-gradient-to-b from-[#E9E7E6] to-[#E7D4DB] ">
      <ContentWrap className="pt-14 flex-col items-center ">
        <div className="text-5xl flex flex-col items-center">
          <div
            className="
        md:text-5xl text-4xl uppercase text-pink
        "
          >
            <span className="font-bold ">you </span>
            could be
          </div>
          <div className="font-paul text-green md:text-8xl text-7xl -mt-6">
            the one!
          </div>
        </div>
        <div className="flex flex-col items-center my-4 text-center">
          <p className="">
            The search is on for 3 fabulous ladies to be The Face of GynaGuard
            for a
          </p>
          <p>1 year ambassadorship, and prizes worth R100 000!</p>
        </div>
        <div className="flex md:flex-row flex-col">
          <Image
            alt=""
            width={650}
            height={300}
            src="/images/comp_win_device.png"
          />
          <div className="text-brown md:-ml-[4rem] mt-2">
            <h1 className="font-extrabold md:text-6xl text-5xl text-pink">
              A FIAT 500
            </h1>
            <div className=" md:text-3xl text-2xl">
              + <span className="font-bold ">RIO0 000</span> IN PRIZES!*
            </div>
            <div className="text-md mt-2">
              <div>Prizes include:</div>
              <ul className="list-disc pl-4">
                <li>
                  <span className="font-bold">R50 000</span> cash prize
                </li>
                <li>
                  <span className="font-bold">Petrol</span> for a year
                </li>
                <li>
                  GynaGuard{" "}
                  <span className="font-bold">product for a year</span>
                </li>
                <li>
                  {" "}
                  <span className="font-bold"> Covergirl</span>on a I magazine +
                  more
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <h1 className=" md:text-5xl text-4xl text-pink uppercase">
            {" "}
            how to <span className="font-extrabold">enter</span>
          </h1>
          <div className="text-brown mt-4">
            1. <span className="font-bold">Buy and try</span> any Gynaguard
            product
          </div>
          <div className="text-brown  mb-[2rem]">
            2. <span className="font-bold">Complete the form below</span>
          </div>
        </div>
        <div className="md:-mb-[4rem] -mb-[2rem] w-full justify-center flex">
          <img
            className="md:w-[70%] w-full"
            src="/images/comp_gg_product_range.png"
            alt="product range"
          />
        </div>
      </ContentWrap>
    </div>
  );
};

export default HowToEnter;
