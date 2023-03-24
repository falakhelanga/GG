import { EntryValues } from "@/types/entry";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
interface EntryPropType {
  entry: EntryValues;
}

const GalleryCard = ({ entry }: EntryPropType) => {
  return (
    <motion.div
      layout
      className="bg-white overflow-hidden rounded-md shadow-lg border border-white border-2"
    >
      <div
        style={{
          backgroundImage: `url(${entry?.photoURL})`,
        }}
        className={` h-[16rem] w-full  bg-no-repeat bg-cover bg-center`}
      />
      <div className="text-[#676767] px-4 py-6">
        <div className="uppercase font-bold">{`${entry.firstName} ${entry.lastName}`}</div>
        <div className="capitalize">{entry.location}</div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
