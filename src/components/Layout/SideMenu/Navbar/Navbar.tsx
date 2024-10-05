"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { type NavigationLinksConfig } from "./Navbar.config";
import { MenuTabList } from "./components/MenuTabList";

interface NavbarProps {
  navigationLinks: NavigationLinksConfig[];
  onClick?: () => void;
}

export const Navbar = ({
  navigationLinks,
  onClick,
}: NavbarProps): JSX.Element => {
  const activeSegment = usePathname() ?? "/";

  return (
    <nav role="navigation" aria-label="main" className="flex-1 pt-4">
      <MenuTabList
        navigationLinksConfig={navigationLinks}
        activeSegment={activeSegment.slice(0, -1)}
        onClick={onClick}
      />
    </nav>
  );
};
