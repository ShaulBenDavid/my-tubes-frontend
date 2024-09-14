"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { getNavigationLinksConfig } from "./Navbar.config";
import { useGetSubscriptionsInfo } from "@/src/api/subscription/hooks";
import { MenuTabList } from "./components/MenuTabList";

interface NavbarProps {
  onClick?: () => void;
}

export const Navbar = ({ onClick }: NavbarProps): JSX.Element => {
  const activeSegment = usePathname() ?? "/";
  const { subscriptionsInfo } = useGetSubscriptionsInfo();
  const navigationLinksConfig = getNavigationLinksConfig(
    subscriptionsInfo?.subscriptionsCount,
  );

  return (
    <nav role="navigation" aria-label="main" className="flex-1 pt-4">
      <MenuTabList
        navigationLinksConfig={navigationLinksConfig}
        activeSegment={activeSegment.slice(0, -1)}
        onClick={onClick}
      />
    </nav>
  );
};
