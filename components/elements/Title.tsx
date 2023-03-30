import React from "react";

export default function Title({
  children,
  className,
  size = "sm",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "md2" | "lg" | "xl" | "2xl";
}) {
  if (size === "sm") {
    return (
      <div {...rest} className={`${className} text-lg`}>
        {children}
      </div>
    );
  }
  if (size === "md") {
    return (
      <div {...rest} className={`${className}  font-semibold text-2xl`}>
        {children}
      </div>
    );
  }
  if (size === "md2") {
    return (
      <div {...rest} className={`${className}  font-extrabold text-[1.75rem]`}>
        {children}
      </div>
    );
  }
  if (size === "lg") {
    return (
      <div {...rest} className={`${className}  font-semibold text-4xl`}>
        {children}
      </div>
    );
  }
  if (size === "xl") {
    return (
      <div {...rest} className={`${className}  font-semibold text-[2.75rem]`}>
        {children}
      </div>
    );
  }
  if (size === "2xl") {
    return (
      <div {...rest} className={`${className}  font-extrabold text-[3.35rem]`}>
        {children}
      </div>
    );
  }
}
