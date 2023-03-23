import CompetitionPageNav from "@/components/sections/CompetitionPlatformPage.tsx/CompetitionPageNav.tsx/CompetitionPageNav";
import EntryForm from "@/components/sections/CompetitionPlatformPage.tsx/EntryForm/EntryForm";
import HowToEnter from "@/components/sections/CompetitionPlatformPage.tsx/EntryForm/HowToEnter";
import React from "react";

const entry = () => {
  return (
    <div>
      <CompetitionPageNav />
      <HowToEnter />

      <EntryForm />
    </div>
  );
};

export default entry;
