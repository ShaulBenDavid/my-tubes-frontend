"use client";

import React, { useCallback, useState, type ReactNode } from "react";
import { ProtectedRoute } from "@/src/providers";
import { SideMenu } from "@/src/components/Layout/SideMenu";
import { Header } from "@/src/components/Layout/Header";
import { Drawer } from "@/src/components/Drawer";
import { SIDE_DRAWER_ARIA } from "@/src/components/Layout/Header/Header";
import { useGetSubscriptionsInfo } from "@/src/api/subscription/hooks";
import { getNavigationLinksConfig } from "@/src/components/Layout/SideMenu/Navbar/Navbar.config";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const { subscriptionsInfo } = useGetSubscriptionsInfo();
  const navigationLinksConfig = getNavigationLinksConfig(
    subscriptionsInfo?.subscriptionsCount,
  );

  const toggleDrawer = useCallback(() => setShowDrawer((prev) => !prev), []);

  return (
    <ProtectedRoute>
      <div className="flex h-full flex-1 flex-row justify-start">
        <aside className="hidden h-full w-72 shrink-0 flex-col border-r border-white/30 p-4 lg:flex">
          <SideMenu navigationLinks={navigationLinksConfig} />
        </aside>
        <div className="flex w-full flex-col overflow-hidden">
          <Header onClick={toggleDrawer} />
          <main className="w-full flex-1 justify-center overflow-hidden p-2 tb:p-4">
            {children}
          </main>
          <Drawer
            onClose={toggleDrawer}
            isOpen={showDrawer}
            id={SIDE_DRAWER_ARIA}
          >
            <div className="flex h-full w-72 flex-col">
              <SideMenu
                onClick={toggleDrawer}
                navigationLinks={navigationLinksConfig}
              />
            </div>
          </Drawer>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Layout;
