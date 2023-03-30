import Button from "@/components/elements/Button";
import GynaguardPromise from "@/components/elements/GynaguardPromise/GynaguardPromise";
import ContentWrap from "@/components/elements/layout/ContentWrap";
import Title from "@/components/elements/Title";
import Image from "next/image";
import React from "react";

export default function product() {
  return (
    <div className="pt-36">
      <ContentWrap>
        <Title
          size="2xl"
          className="text-green uppercase my-5 text-center px-40"
        >
          essential daily intimate wash
        </Title>
        <div className="grid grid-cols-2 ">
          <div>
            <Image
              height={200}
              width={200}
              alt="gynaguard product"
              src="/images/gynaguard-product.png"
              className="h-full w-full"
            />
          </div>
          <div className="">
            <Title
              size="md2"
              className="text-green uppercase my-5 font-semibold mr-52"
            >
              CONDITIONS AND GENTLY MOISTURISES YOUR MOST SENSITIVE AND INTIMATE
              AREAS
            </Title>
            <p className="text-gray-500 font-bold my-5">
              [450 ML] + [250 ML] + [140 ML]
            </p>
            <p className="text-gray-500 text-lg  pr-44">
              Sensitive formula for daily use to gently rinse away odour causing
              germs from your most sensitive areas without causing dryness or
              irritation. <br />
              <br />
              Supports and reinforces a healthy pH balance. Specially formulated
              with probiotics and is colourant and fragrance-free.
            </p>
            <Button
              style={{
                backgroundColor: "#DD2E64",
                width: "200px",
                height: "60px",
                marginTop: "70px",
              }}
              fullWidth
              variant="outline"
              className={`uppercase ${"bg-[#DD2E64] text-white"}`}
            >
              buy now
            </Button>
          </div>
        </div>
        <hr className="mx-44 bg-pink h-0.5 my-20" />
      </ContentWrap>

      <GynaguardPromise />
    </div>
  );
}
