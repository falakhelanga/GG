import React from "react";

export default function Title({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div {...rest} className={`${className} text-xl`}>
      {children}
    </div>
  );
}
