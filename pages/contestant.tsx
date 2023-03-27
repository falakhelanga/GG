import ContentWrap from "@/components/elements/layout/ContentWrap";
import CompetitionPageNav from "@/components/sections/CompetitionPlatformPage.tsx/CompetitionPageNav.tsx/CompetitionPageNav";
import GalleryGrid from "@/components/sections/CompetitionPlatformPage.tsx/gallery/GalleryGrid";
import React from "react";

const contestant = () => {
  return (
    <div className="">
      <CompetitionPageNav />
      <div className="bg-gradient-to-b from-[#E9E7E6] to-[#E7D4DB] pb-14">
        <ContentWrap className="pt-14 flex-col items-center ">
          <div className="text-5xl flex flex-col items-center">
            <div
              className="
        md:text-5xl text-4xl uppercase text-pink
        "
            >
              entry
            </div>
            <div className="font-paul text-green md:text-8xl text-7xl -mt-6">
              gallery
            </div>
          </div>
          <div className="text-brown text-center mt-10 md:mt-16 mb-8">
            <p className="md:text-lg text-md">
              Find yourself and your friends in the contestant gallery.
            </p>
            <p className="text-sm">
              {`We'll be selecting our 3 Gynaguard ambassadors from this amazing
group of ideas`}
            </p>
          </div>
          <GalleryGrid />
        </ContentWrap>
      </div>
    </div>
  );
};

export default contestant;
