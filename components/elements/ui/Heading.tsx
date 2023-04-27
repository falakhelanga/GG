import React from "react";
import Title from "./Title";

const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`text-center text-pink uppercase font-normal mb-4 md:text-[2.5em] text-4xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Heading;
