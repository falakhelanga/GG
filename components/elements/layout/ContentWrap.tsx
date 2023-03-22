import { ReactNode } from "react";

const ContentWrap = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`mx-auto w-full max-w-7xl px-8 ${className}`}>
      {children}
    </div>
  );
};

export default ContentWrap;
