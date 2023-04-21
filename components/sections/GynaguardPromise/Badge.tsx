import Image from "next/image";
import React from "react";

interface BadgePropType {
  image: string;
  text: string;
  className?: string;
}

const Badge = ({ image, text, className }: BadgePropType) => {
  return (
    <div
      className={`${className} flex flex-col items-center text-black text-center gap-4`}
    >
      <Image
        src={image}
        height={300}
        width={300}
        alt=""
        className="md:block hidden"
      />
      <Image
        src={image}
        height={200}
        width={200}
        alt=""
        className="md:hidden block"
      />
      <div className="text-lg">{text}</div>
    </div>
  );
};

export default Badge;
