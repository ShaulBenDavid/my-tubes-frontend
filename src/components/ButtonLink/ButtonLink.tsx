import React, { type ReactNode } from "react";
import Link, { type LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";
import { ButtonLinkVariants } from "./ButtonLink.types";
import { linkStyleConfig } from "./ButtonLink.config";

interface ButtonLinkProps extends LinkProps {
  variant?: ButtonLinkVariants;
  width?: string;
  ariaLabel?: string;
  className?: string;
  isOutSource?: boolean;
  children: ReactNode;
}

export const ButtonLink = ({
  variant = ButtonLinkVariants.PRIMARY,
  width,
  isOutSource = false,
  children,
  className,
  ...props
}: ButtonLinkProps): JSX.Element => {
  const defaultClassName = `flex h-[35px] w-full flex-row content-center items-center justify-center whitespace-nowrap rounded-xl px-5 text-sm font-medium capitalize ${linkStyleConfig[variant]}`;

  return isOutSource ? ( // !! to fix
    <a
      href={props.href as string}
      className={twMerge(defaultClassName, className)}
      style={{ width }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <Link
      {...props}
      className={twMerge(defaultClassName, className)}
      style={{ width }}
    >
      {children}
    </Link>
  );
};
