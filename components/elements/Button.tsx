import React from "react";

interface ButtonPropType {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  variant?: "outline" | "pink" | "green";
  fullWidth?: boolean;
}

const Button = ({
  children,
  className,
  type = "button",
  onClick,
  variant = "pink",
  fullWidth = false,
  ...rest
}: ButtonPropType) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      type={type}
      className={`rounded-full transition transition-all ease-in-out  duration-500 ${
        fullWidth && "w-full"
      } text-pink    px-12 py-2 ${
        variant === "outline" &&
        "bg-transparent  border-pink border-2 text-pink hover:bg-pink hover:text-white hover:border-pink"
      } 
      ${variant === "pink" && "text-white bg-pink hover:opacity-75"}
      ${variant === "green" && "bg-green hover:opacity-75 text-white"}
      font-bold  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
