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
    <Title
      size="2xl"
      className={`text-center text-pink uppercase font-normal mb-4 max-sm:text-[2em] ${className}`}
    >
      {children}
    </Title>
  );
};

export default Heading;
