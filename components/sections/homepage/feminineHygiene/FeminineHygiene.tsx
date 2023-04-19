import ContentWrap from "@/components/elements/ui/ContentWrap";
import Image from "next/image";
import React from "react";
import { ParallaxProvider, useParallax, Parallax } from "react-scroll-parallax";
import FeminineHygieneCard from "./FeminineHygieneCard";

const FeminineHygiene = () => {
  const { ref } = useParallax<HTMLDivElement>({
    speed: 30,
    opacity: [1, 0],
  });
  return (
    <div className="md:bg-[url(/images/desktop_fem_hyg_bg.png)] bg-[url(/images/mobile_fem_hyg_bg.png)]  bg-cover bg-center  h-auto relative bg-no-repeat md:overflow-hidden">
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
        <ContentWrap>
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
            <p>
              Say that about needing a{" "}
              <span className="text-pink font-semibold">delicate balance</span>{" "}
              here.
            </p>{" "}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="text-center mb-8 text-sm">
            <p>
              Finish off the sentiment by talking to the fact that ALL AGES need
              this feminine
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="md:absolute bottom-0 w-full flex-1 justify-center flex left-0 max-sm:h-full ">
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
  );
};

export default FeminineHygiene;
