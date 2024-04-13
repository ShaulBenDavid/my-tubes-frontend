import React, { type ReactNode } from "react";
import Link, { type LinkProps } from "next/link";
import type { ButtonLinkVariants } from "./ButtonLink.types";
import { linkStyleConfig } from "./ButtonLink.config";

interface ButtonLinkProps extends LinkProps {
  variant: ButtonLinkVariants;
  width?: string;
  ariaLabel?: string;
  isOutSource?: boolean;
  children: ReactNode;
}

export const ButtonLink = ({
  variant,
  width,
  isOutSource = false,
  children,
  ...props
}: ButtonLinkProps): JSX.Element => {
  const className = `flex h-[35px] w-full flex-row content-center items-center justify-center whitespace-nowrap rounded-xl px-5 text-base capitalize ${linkStyleConfig[variant]}`;

  return isOutSource ? ( // !! to fix
    <a
      href={props.href as string}
      className={className}
      style={{ width }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <Link {...props} className={className} style={{ width }}>
      {children}
    </Link>
  );
};
