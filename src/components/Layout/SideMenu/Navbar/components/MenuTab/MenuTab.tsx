"use client";

import React from "react";
import Link from "next/link";
import { BsArrowReturnRight } from "react-icons/bs";
import type { Routes } from "@/src/routes";
import type { TabIconsType } from "./MenuTab.types";
import { MenuTabStyles } from "./MenuTab.styles";
import type { NavigationLinksConfig } from "../../Navbar.config";
import { MenuTabList } from "../MenuTabList";

interface MenuTabProps {
  href: string | Routes;
  label: string;
  activeSegment: string;
  id: number;
  isActive: boolean;
  isNestedLink: boolean;
  icons?: TabIconsType;
  onClick?: () => void;
  nestedLinks: NavigationLinksConfig[];
}

export const MenuTab = ({
  href,
  label,
  activeSegment,
  id,
  isActive,
  isNestedLink,
  icons,
  onClick,
  nestedLinks,
}: MenuTabProps): JSX.Element => {
  const hasNestedLinks: boolean = nestedLinks.some(
    ({ parent }) => parent === id,
  );

  return (
    <li>
      <span className="flex flex-row items-center gap-1">
        {isNestedLink && (
          <BsArrowReturnRight aria-hidden size={24} opacity={0.7} />
        )}
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
      </span>
      {hasNestedLinks && (
        <div className="pl-4 pt-2">
          <MenuTabList
            activeSegment={activeSegment}
            navigationLinksConfig={nestedLinks}
            onClick={onClick}
            currentLevelId={id}
            isNestedLink
          />
        </div>
      )}
    </li>
  );
};
