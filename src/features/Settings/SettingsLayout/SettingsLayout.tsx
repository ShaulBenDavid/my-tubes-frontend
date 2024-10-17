import React, { type ReactNode } from "react";
import { Navbar } from "@/src/components/Layout/SideMenu/Navbar";
import { settingsNavigationLinksConfig } from "./SettingsLayout.config";

interface SettingsLayoutProps {
  children: ReactNode;
}

export const SettingsLayout = ({
  children,
}: SettingsLayoutProps): JSX.Element => (
  <div className="flex h-full flex-1 flex-row">
    <aside
      className="hidden h-full shrink-0 flex-col lg:flex"
      aria-label="Settings"
    >
      <Navbar navigationLinks={settingsNavigationLinksConfig} />
    </aside>
    <div className="flex w-full overflow-y-auto tb:p-2 tb:px-4">{children}</div>
  </div>
);
