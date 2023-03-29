import ContentWrap from "@/components/elements/layout/ContentWrap";
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
    <div className="bg-[url(/images/desktop_fem_hyg_bg.png)] bg-cover bg-center h-[90vh] relative bg-no-repeat overflow-hidden">
      <Parallax
        translateX={["150px", "-10px"]}
        translateY={["-130px", "0px"]}
        scale={[0.75, 1]}
        rotate={[-180, 0]}
        easing="easeInQuad"
        speed={20}
        opacity={[1, 0]}
      >
        <Image
          src="/images/desktop_fem_hyg_bg_parallax_1.png"
          alt=""
          height={2000}
          width={2000}
        />
      </Parallax>

      <Image
        src="/images/desktop_fem_hyg_bg_parallax_1.png"
        alt=""
        height={2000}
        width={2000}
      />
      <div
        ref={ref}
        className="bg-[url(/images/desktop_fem_hyg_bg_parallax_1.png)] bg-contain bg-center h-full absolute top-0 w-full left-0 bg-no-repeat"
      ></div>
      {/* CONTENT START */}
      <div className="absolute top-0 right-0 flex flex-col items-center w-full pt-14 text-white  h-full">
        <ContentWrap>
          <div className="text-5xl flex flex-col items-center mb-4">
            <div
              className="
        md:text-5xl text-4xl uppercase text-white
        "
            >
              why <span className="text-pink">feminine hygiene</span> is
            </div>
            <div className="font-paul text-green md:text-8xl text-7xl -mt-6">
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
          <div className="text-center mb-8">
            <p>
              finish off the sentiment by talking to the fact that all AGES need
              this feminine
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="absolute bottom-0 w-full flex-1 justify-center flex left-0 ">
            <ContentWrap className="grid grid-cols-3 gap-6  justify-center  w-full">
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
            </ContentWrap>
          </div>
        </ContentWrap>
      </div>
      {/* CONTENT END */}
      <div></div>
    </div>
  );
};

export default FeminineHygiene;
