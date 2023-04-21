import React from "react";
import Logo from "../../elements/ui/Logo";
import ContentWrap from "../../elements/ui/ContentWrap";
import Badge from "./Badge";

const badges = [
  {
    image: "/images/badge_pH.svg",
    text: "Helps mantain a healthy pH balance",
  },
  {
    image: "/images/badge_gynae_tested.svg",
    text: "Gynaecologiacally tested **",
  },
  {
    image: "/images/badge_pre_probiotics.svg",
    text: "Enhanced with pre-biotic and probiotic formulation",
  },
  {
    image: "/images/badge_probiotics.svg",
    text: "Contains probiotic to restore a healthy vaginal flora",
  },
  {
    image: "/images/badge_cranberry.svg",
    text: "Contains cranberry extract*",
  },
  {
    image: "/images/badge_aloe_infused.svg",
    text: "Infused with Aloe Barbadensis to help soothe irritation",
  },
];

const GynaguardPromise = () => {
  return (
    <div className="w-full pb-14">
      <ContentWrap>
        <div className="md:flex hidden gap-3 items-end justify-center my-12">
          <h1 className="text-pink font-medium md:text-[4em] text-[1.4em] uppercase  flex items-end h-full leading-[0.9]">
            the
          </h1>
          <Logo color="pink" height={432} width={432} />
          <h1 className="text-pink font-medium md:text-[4em] text-[1.4em] uppercase  flex items-end h-full leading-[0.9]">
            promise
          </h1>
        </div>
        <div className="md:hidden flex gap-3 items-end justify-center mt-12 flex-col items-center">
          <div className="flex gap-2">
            <h1 className="text-pink font-medium md:text-[4em] text-[2.4em] uppercase  flex items-end h-full leading-[1.1]">
              the
            </h1>
            <Logo color="pink" height={432} width={432} />
          </div>

          <h1 className="text-pink font-medium md:text-[4em] text-[2.4em] uppercase  flex items-end h-full leading-[0.9]">
            promise
          </h1>
        </div>
        <div className="md:my-16 my-10 md:text-lg text-center md:mx-[10rem]">
          Our promise to you is that every GynaGuard product is made with the
          highest quality ingredient, which is why we have 6 core benefits that
          ensure the health of your V-zone.
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {badges.map((badge) => (
            <Badge {...badge} key={badge.image} />
          ))}
        </div>
        <div className="my-10 text-center w-full text-sm text-[#c9adaf] flex justify-center">
          <div className="md:w-[50%] w-full leading-7">
            *GynaGuard Lubricating Moisturizing Gel. **GynaGuard Intimate
            Comfort Gel. #GynaGuard Ultimate intimate wash. ^GynaGuard Daily
            Comfort Sensitive Wipes.
          </div>
        </div>
      </ContentWrap>
    </div>
  );
};

export default GynaguardPromise;
