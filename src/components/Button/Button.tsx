import React from "react";
import { twMerge } from "tailwind-merge";
import { ButtonVariants } from "./Button.types";
import { buttonVariantsStyleConfig } from "./Button.config";
import { Spinner, SpinnerSize, SpinnerVariants } from "../Spinner";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
  width?: string;
  isLoading?: boolean;
}

export const Button = ({
  variant,
  width,
  isLoading = false,
  children,
  type = "submit",
  className,
  onClick,
  disabled,
  ...props
}: ButtonProps): JSX.Element => (
  <button
    {...props}
    type={type}
    onClick={onClick}
    disabled={disabled || isLoading}
    className={twMerge(
      `flex h-[35px] w-full items-center justify-center whitespace-nowrap rounded-xl px-2 text-sm font-semibold capitalize
      ${disabled && "cursor-not-allowed"}
      ${buttonVariantsStyleConfig[variant]}
      ${isLoading && "cursor-wait"} disabled:opacity-60`,
      className,
    )}
    style={{ width }}
  >
    {isLoading ? (
      <Spinner
        size={SpinnerSize.SMALL}
        variant={
          variant === ButtonVariants.PRIMARY
            ? SpinnerVariants.WHITE
            : SpinnerVariants.PRIMARY
        }
      />
    ) : (
      children
    )}
  </button>
);
