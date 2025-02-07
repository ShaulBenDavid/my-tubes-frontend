import React, { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import type { ColoredLinkVariants } from "./ColoredLink.types";
import { coloredLinkConfig } from "./ColoredLink.config";

interface ColoredLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  width?: string;
  children: ReactNode;
  variant: ColoredLinkVariants;
}

export const ColoredLink = ({
  width,
  href,
  children,
  variant,
  ...props
}: ColoredLinkProps): JSX.Element => (
  <a
    {...props}
    href={href as string}
    className={twMerge(
      "rounded-lg px-5 py-2.5 text-center text-base font-semibold text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4",
      coloredLinkConfig[variant],
    )}
    style={{ width }}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
