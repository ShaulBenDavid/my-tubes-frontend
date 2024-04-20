"use client";

import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { getNavigationLinksConfig } from "./Navbar.config";
import { MenuTab } from "./MenuTab";
import { useGetSubscriptionsInfo } from "@/src/api/subscription/hooks";

export const Navbar = (): JSX.Element => {
  const activeSegment = useSelectedLayoutSegment() ?? "/";
  const { subscriptionsInfo } = useGetSubscriptionsInfo();
  const navigationLinksConfig = getNavigationLinksConfig(
    subscriptionsInfo?.subscriptionsCount,
  );

  return (
    <nav role="navigation" aria-label="main" className="flex-1 pt-4">
      <ul className="flex flex-col gap-2">
        {navigationLinksConfig.map(({ label, href, icon }) => {
          const isActive = activeSegment === href.substring(1);

          return (
            <MenuTab
              key={label}
              isActive={isActive}
              href={href}
              icons={icon}
              label={label}
            />
          );
        })}
      </ul>
    </nav>
  );
};
