"use client";

import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { navigationLinksConfig } from "./Navbar.config";
import { MenuTab } from "./MenuTab";

export const Navbar = (): JSX.Element => {
  const activeSegment = useSelectedLayoutSegment() ?? "/";

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
