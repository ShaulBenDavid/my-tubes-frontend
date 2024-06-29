"use client";

import React from "react";
import Link from "next/link";
import type { Routes } from "@/src/routes";
import type { TabIconsType } from "./MenuTab.types";
import { MenuTabStyles } from "./MenuTab.styles";

interface MenuTabProps {
  href: string | Routes;
  label: string;
  isActive: boolean;
  icons?: TabIconsType;
  onClick?: () => void;
}

export const MenuTab = ({
  href,
  label,
  isActive,
  icons,
  onClick,
}: MenuTabProps): JSX.Element => (
  <li>
    <Link
      href={href}
      onClick={onClick}
      className={`${MenuTabStyles} ${isActive ? "bg-white/10" : ""}`}
      aria-label={label}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="flex flex-row items-center gap-2">
        {icons && icons[isActive ? "active" : "default"]}
        {label}
      </span>
    </Link>
  </li>
);
