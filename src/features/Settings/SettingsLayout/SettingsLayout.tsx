"use client";

import React, { useContext, type ReactNode } from "react";
import { Navbar } from "@/src/components/Layout/SideMenu/Navbar";
import { getSettingsNavigationLinksConfig } from "./SettingsLayout.config";
import { useMediaQuery } from "@/src/hooks";
import { MobileBar } from "@/src/components/Layout/MobileBar";
import { AuthContext } from "@/src/context/auth";
import { Roles } from "@/src/api/auth";

interface SettingsLayoutProps {
  children: ReactNode;
}

export const SettingsLayout = ({
  children,
}: SettingsLayoutProps): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { auth } = useContext(AuthContext);
  const settingsNavigationLinksConfig = getSettingsNavigationLinksConfig(
    auth?.role ?? Roles.USER,
  );

  return (
    <div className="flex w-full flex-col tb:flex-row">
      {isDesktop ? (
        <aside
          className="inside-header h-full shrink-0 flex-col lg:flex"
          aria-label="Settings"
        >
          <Navbar navigationLinks={settingsNavigationLinksConfig} />
        </aside>
      ) : (
        <div className="inside-header">
          <MobileBar navigationLinks={settingsNavigationLinksConfig} />
        </div>
      )}
      <div className="flex h-full w-full flex-col overflow-y-auto tb:p-2 tb:px-4">
        {children}
      </div>
    </div>
  );
};
