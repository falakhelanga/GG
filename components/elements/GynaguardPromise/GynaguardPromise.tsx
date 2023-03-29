import React from "react";
import Logo from "../Logo";
import ContentWrap from "../layout/ContentWrap";
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
        <div className="flex gap-3 items-end justify-center my-12">
          <h1 className="text-pink font-medium text-[4em] uppercase  flex items-end h-full leading-[0.9]">
            the
          </h1>
          <Logo color="pink" height={432} width={432} />
          <h1 className="text-pink font-medium text-[4em] uppercase  flex items-end h-full leading-[0.9]">
            promise
          </h1>
        </div>
        <div className="my-16 text-center">
          Our promise to you is that every GynaGuard product is made with the
          highest quality ingredient, which is why we have 6 core benefits that
          ensure the health of your V-zone.
        </div>
        <div className="grid grid-cols-3 gap-8">
          {badges.map((badge) => (
            <Badge {...badge} key={badge.image} />
          ))}
        </div>
        <div className="my-10 text-center w-full text-sm text-brown flex justify-center">
          <div className="w-[50%]">
            GynaGuard Lubricating Moisturizing Gel. GynaGuard Intimate Comfort
            Gel. GynaGuard Ultimate intimate wash. GynaGuard Daily Comfort
            Sensitive Wipes.
          </div>
        </div>
      </ContentWrap>
    </div>
  );
};

export default GynaguardPromise;
