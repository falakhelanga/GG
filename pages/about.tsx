import React from "react";
import ContentWrap from "@/components/sections/ContentWrap";
import CompetitionPageNav from "@/components/sections/CompetitionPlatformPage.tsx/CompetitionPageNav.tsx/CompetitionPageNav";

export default function about() {
  return (
    <div className="pb-14">
      <CompetitionPageNav />
      <ContentWrap className="pt-14 flex-col items-center ">
        <div className="text-5xl flex flex-col items-center">
          <div
            className="
        text-5xl uppercase text-pink
        "
          >
            ABOUT &
          </div>
          <div className="font-paul text-green text-8xl -mt-6">gallery</div>
        </div>
      </ContentWrap>
    </div>
  );
}
