// src/components/Button/Button.tsx
import React from "react";
import clsx from "clsx";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

const Button = ({
  variant,
  children,
  onClick,
  type = "button",
  disabled = false,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "px-4 py-2 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 btn-click-animation min-w-32",
        {
          "bg-green-500 hover:bg-green-700 text-white": variant === "primary",
          "bg-gray-500 hover:bg-gray-700 text-white": variant === "secondary",
          "opacity-50 cursor-not-allowed": disabled,
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
