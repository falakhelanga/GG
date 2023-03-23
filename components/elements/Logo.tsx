import Image from "next/image";
import React from "react";

const Logo = ({ ...props }) => {
  return (
    <div {...props}>
      <Image width={200} height={200} src="/images/GynaGuard Logo.svg" />
    </div>
  );
};

export default Logo;
