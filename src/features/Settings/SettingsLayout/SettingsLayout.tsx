"use client";

import React, { type ReactNode } from "react";
import { Navbar } from "@/src/components/Layout/SideMenu/Navbar";
import { settingsNavigationLinksConfig } from "./SettingsLayout.config";
import { useMediaQuery } from "@/src/hooks";
import { MobileBar } from "@/src/components/Layout/MobileBar";

interface SettingsLayoutProps {
  children: ReactNode;
}

export const SettingsLayout = ({
  children,
}: SettingsLayoutProps): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex h-full w-full flex-col overflow-hidden tb:flex-row">
      {isDesktop ? (
        <aside
          className="h-full shrink-0 flex-col lg:flex"
          aria-label="Settings"
        >
          <Navbar navigationLinks={settingsNavigationLinksConfig} />
        </aside>
      ) : (
        <MobileBar navigationLinks={settingsNavigationLinksConfig} />
      )}
      <div className="flex h-full w-full flex-col overflow-y-auto tb:p-2 tb:px-4">
        {children}
      </div>
    </div>
  );
};
