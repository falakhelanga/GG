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
      transition={{ duration: 0.5 }}
      layout
      className="bg-white gallery-card overflow-hidden rounded-md shadow-lg border border-white border-2"
    >
      <div className="h-[20rem] w-auto overflow-hidden relative">
        <Image
          width={400}
          height={600}
          src={entry?.photoURL}
          alt=""
          className={`gallery-card-image h-full w-full    bg-no-repeat bg-cover bg-center object-cover`}
        />
      </div>

      <div className="text-[#676767] px-4 py-6">
        <div className="uppercase font-bold">{`${entry.firstName} ${entry.lastName}`}</div>
        <div className="capitalize">{entry.location}</div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
