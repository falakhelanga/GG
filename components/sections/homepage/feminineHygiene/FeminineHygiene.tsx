import ContentWrap from "@/components/elements/ui/ContentWrap";
import Image from "next/image";
import React from "react";
import { ParallaxProvider, useParallax, Parallax } from "react-scroll-parallax";
import FeminineHygieneCard from "./FeminineHygieneCard";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";

const FeminineHygiene = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const { ref } = useParallax<HTMLDivElement>({
    speed: 30,
    opacity: [1, 0],
  });
  const { ref: mobileRef } = useParallax<HTMLDivElement>({
    speed: 30,
    opacity: [1, 0],
    translateX: ["-40px", "-150px"],
    translateY: ["50px", "-180px"],
  });
  return (
    <>
      {/* DESKTOP */}
      <div className="md:block hidden md:bg-[url(/images/desktop_fem_hyg_bg.png)] relative  bg-cover bg-center  h-auto relative bg-no-repeat md:overflow-hidden">
        <div className="h-full w-full absolute top-0 left-0 md:hidden block">
          <Image
            fill
            className="h-full w-full"
            alt="lady blowing flow"
            src="/images/mobile_fem_hyg_bg.png"
          />
        </div>
        <div className="relative z-[4]">
          <Parallax
            translateX={["150px", "-10px"]}
            translateY={["-130px", "0px"]}
            scale={[0.75, 1]}
            rotate={[-180, 0]}
            easing="easeInQuad"
            speed={20}
            opacity={[1, 0]}
            className="md:block hidden"
          >
            <Image
              src="/images/desktop_fem_hyg_bg_parallax_1.png"
              alt=""
              height={2000}
              width={2000}
            />
          </Parallax>
          {/* 
      <Image
        src="/images/desktop_fem_hyg_bg_parallax_1.png"
        alt=""
        height={2000}
        width={2000}
      /> */}
          <div
            ref={ref}
            className="bg-[url(/images/desktop_fem_hyg_bg_parallax_1.png)] md:block  hidden bg-contain md:bg-contain bg-center h-full absolute top-0 w-full left-0 bg-no-repeat"
          ></div>
          {/* CONTENT START */}
          <div className="md:absolute top-0 right-0 flex flex-col items-center w-full md:pt-14 max-sm:py-8 text-white  h-full">
            <ContentWrap className="h-full relative">
              <div className="">
                <div className="text-5xl flex flex-col items-center mb-4">
                  <div
                    className="
        md:text-5xl text-2xl uppercase text-white
        "
                  >
                    why <span className="text-pink">feminine hygiene</span> is
                  </div>
                  <div className="font-paul text-green md:text-8xl text-6xl -mt-6">
                    so important
                  </div>
                </div>
                <div className="text-center my-8">
                  <p className="text-lg">
                    Say that about needing a{" "}
                    <span className="text-pink font-semibold">
                      delicate balance
                    </span>{" "}
                    here.
                  </p>{" "}
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="text-center mb-8 text-sm">
                  <p>
                    Finish off the sentiment by talking to the fact that ALL
                    AGES need this feminine
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <div className="md:absolute bottom-0   w-full flex-1 justify-center flex left-0 max-sm:h-full ">
                <div className="mx-auto w-full md:max-w-7xl md:px-8 grid md:grid-cols-3 gap-6  justify-center  w-full max-sm:h-full max-sm:pb-8">
                  <FeminineHygieneCard
                    color="lightPink"
                    title="teenage girls"
                    body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit voluptates, tenetur veritatis nesciunt amet."
                  />
                  <FeminineHygieneCard
                    color="lightGreen"
                    title="adult women"
                    body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit voluptates, tenetur veritatis nesciunt amet."
                  />
                  <FeminineHygieneCard
                    color="lightBrown"
                    title="menopausal women"
                    body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit voluptates, tenetur veritatis nesciunt amet."
                  />
                </div>
              </div>
            </ContentWrap>
          </div>
          {/* CONTENT END */}
          <div></div>
        </div>
      </div>

      {/* MOBILE */}

      <div className="flex md:hidden flex-col h-full w-full ">
        <div className="h-full w-full relative overflow-hidden">
          <Parallax
            // translateX={["150px", "200px"]}
            // translateY={["330px", "100px"]}
            // scale={[0.75, 1]}
            // rotate={[-180, 0]}
            easing="easeInQuad"
            speed={20}
            opacity={[1, 0]}
            className=" absolute top-[4rem]  right-0  bg-no-repeat"
          >
            <Image
              src="/images/desktop_fem_hyg_bg_parallax_1.png"
              alt=""
              width={4000}
              height={4000}
              className="h-full w-full  "
            />
          </Parallax>
          <Image
            ref={mobileRef}
            src={"/images/desktop_fem_hyg_bg_parallax_1.png"}
            width={2000}
            alt=""
            height={2000}
            className="  bg-contain md:bg-contain bg-center absolute top-0  right-0 left-0 bg-no-repeat"
          ></Image>
          <Image
            width={300}
            height={300}
            className="h-full w-full"
            alt="lady blowing flow"
            src="/images/mobile_fem_hyg_bg.png"
          />
          <ContentWrap className="absolute bottom-0 rounded-t-md">
            <div className="w-full bg-[rgba(0,0,0,0.5)] h-[4rem] rounded-t-lg"></div>
          </ContentWrap>
        </div>
        {/* content */}
        <div className="bg-[#241019]">
          <ContentWrap className="-mt-16 h-full">
            <div className="  relative z-8 p-4 rounded-md h-full">
              <div className="text-5xl flex flex-col items-center ">
                <div
                  className="
        md:text-5xl text-3xl uppercase text-white text-center
        "
                >
                  why <span className="text-pink">feminine hygiene</span> is
                </div>
                <div className="font-paul text-green md:text-8xl text-7xl -mt-6">
                  so important
                </div>
              </div>
              <div className="mt-6 text-white text-center">
                <div className="text-white text-center">
                  Say that about needing a{" "}
                  <span className="text-pink">delicate balance</span> here.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="mt-4">
                  Finish off the sentiment by talking to the fact that ALL AGES
                  need this feminine Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </div>
              </div>

              <div className="md:absolute bottom-0   w-full flex-1 justify-center flex left-0 max-sm:h-full mt-14 ">
                <div className="mx-auto w-full md:max-w-7xl md:px-8 grid md:grid-cols-3 gap-6  justify-center  w-full max-sm:h-full max-sm:pb-8">
                  <FeminineHygieneCard
                    color="lightPink"
                    title="teenage girls"
                    body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit voluptates, tenetur veritatis nesciunt amet."
                  />
                  <FeminineHygieneCard
                    color="lightGreen"
                    title="adult women"
                    body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit voluptates, tenetur veritatis nesciunt amet."
                  />
                  <FeminineHygieneCard
                    color="lightBrown"
                    title="menopausal women"
                    body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit voluptates, tenetur veritatis nesciunt amet."
                  />
                </div>
              </div>
            </div>
          </ContentWrap>
        </div>
      </div>
    </>
  );
};

export default FeminineHygiene;
