import React from "react";

export default function ContentWrap({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <div
      className={`${className} flex justify-center content-center min-h-screen h-fit bg-gradient-to-b from-[#E9E7E6] to-[#E7D4DB]`}
    >
      <div className=" max-w-3xl">{children}</div>
    </div>
  );
}
