import React from "react";

export default function Title({
  children,
  className,
  size = "sm",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
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
  if (size === "lg") {
    return (
      <div {...rest} className={`${className}  font-semibold text-4xl`}>
        {children}
      </div>
    );
  }
}
