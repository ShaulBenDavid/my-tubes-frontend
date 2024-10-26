import React, { type ReactNode } from "react";
import Link from "next/link";

interface MobileTabProps {
  href: string;
  isActive: boolean;
  label: string;
  icon: ReactNode;
}

export const MobileTab = ({
  href,
  isActive,
  label,
  icon,
}: MobileTabProps): JSX.Element => (
  <li className="w-full flex-1">
    <Link
      href={href}
      aria-label={label}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="flex flex-col items-center justify-center gap-1 py-1 text-sm">
        {icon}
        {label}
      </span>
    </Link>
  </li>
);
