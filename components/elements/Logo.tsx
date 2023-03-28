import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({
  color = "white",
  height = 200,
  width = 200,
  ...props
}: {
  color?: "pink" | "white";
  height?: number;
  width?: number;
}) => {
  return (
    <Link href="/" {...props}>
      {color === "white" && (
        <Image
          alt="gynaguard logo"
          width={width}
          height={height}
          src="/images/GynaGuard Logo.svg"
        />
      )}
      {color === "pink" && (
        <div>
          <Image
            className=""
            alt="gynaguard logo"
            width={width}
            height={height}
            src="/images/GynaGuard Logo Pink.svg"
          />
        </div>
      )}
    </Link>
  );
};

export default Logo;
