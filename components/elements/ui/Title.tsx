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
      <div {...rest} className={` text-lg ${className}`}>
        {children}
      </div>
    );
  }
  if (size === "md") {
    return (
      <div {...rest} className={` font-semibold text-2xl ${className} `}>
        {children}
      </div>
    );
  }
  if (size === "md2") {
    return (
      <div {...rest} className={` font-extrabold text-[1.75rem] ${className} `}>
        {children}
      </div>
    );
  }
  if (size === "lg") {
    return (
      <div {...rest} className={`  font-semibold text-4xl ${className}`}>
        {children}
      </div>
    );
  }
  if (size === "xl") {
    return (
      <div {...rest} className={` font-semibold text-[2.75rem] ${className} `}>
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

  return (
    <div {...rest} className={` text-lg ${className}`}>
      {children}
    </div>
  );
}
