import React, { type ReactNode } from "react";

interface ColoredLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  width?: string;
  isOutSource?: boolean;
  children: ReactNode;
}

export const ColoredLink = ({
  width,
  href,
  children,
  ...props
}: ColoredLinkProps): JSX.Element => (
  <a
    {...props}
    href={href as string}
    className="mb-2 me-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800"
    style={{ width }}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
