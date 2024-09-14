"use client";

import React, { useMemo } from "react";
import { MenuTab } from "../MenuTab";
import type { NavigationLinksConfig } from "../../Navbar.config";

interface MenuTabListProps {
  activeSegment: string;
  currentLevelId?: number;
  isNestedLink?: boolean;
  onClick?: () => void;
  navigationLinksConfig: NavigationLinksConfig[];
}

export const MenuTabList = ({
  activeSegment,
  currentLevelId,
  isNestedLink = false,
  onClick,
  navigationLinksConfig,
}: MenuTabListProps): JSX.Element => {
  const { currentLinks, nestedLinks } = useMemo(
    () =>
      navigationLinksConfig.reduce<{
        currentLinks: NavigationLinksConfig[];
        nestedLinks: NavigationLinksConfig[];
      }>(
        (acu, cur) => {
          const updatedAcu = { ...acu };

          if (
            typeof cur?.parent === "number" &&
            cur.parent !== currentLevelId
          ) {
            updatedAcu.nestedLinks = [...updatedAcu.nestedLinks, cur];

            return updatedAcu;
          }

          updatedAcu.currentLinks = [...updatedAcu.currentLinks, cur];
          return updatedAcu;
        },
        { currentLinks: [], nestedLinks: [] },
      ),
    [navigationLinksConfig, currentLevelId],
  );

  return (
    <ul className="flex flex-col gap-2">
      {currentLinks.map(({ label, href, icon, id }) => {
        const isActive = activeSegment === href;

        return (
          <MenuTab
            key={label}
            isActive={isActive}
            href={href}
            icons={icon}
            activeSegment={activeSegment}
            id={id}
            label={label}
            onClick={onClick}
            nestedLinks={nestedLinks}
            isNestedLink={isNestedLink}
          />
        );
      })}
    </ul>
  );
};
