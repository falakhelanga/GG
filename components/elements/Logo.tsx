import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ ...props }) => {
  return (
    <Link href="/" {...props}>
      <Image
        alt="gynaguard logo"
        width={200}
        height={200}
        src="/images/GynaGuard Logo.svg"
      />
    </Link>
  );
};

export default Logo;
