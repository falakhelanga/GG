import { ContestantCardType } from "@/types/Components/Elements/ContestantCardType";
import React from "react";

const ContestantCard = ({ contestant }: ContestantCardType) => {
  return <div>{contestant.fullName}</div>;
};

export default ContestantCard;
