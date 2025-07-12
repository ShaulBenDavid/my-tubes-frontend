"use client";

import React, { useCallback, useState, type ReactNode } from "react";
import { ProtectedRoute } from "@/src/providers";
import { SideMenu } from "@/src/components/Layout/SideMenu";
import { Header } from "@/src/components/Layout/Header";
import { Drawer } from "@/src/components/Drawer";
import { SIDE_DRAWER_ARIA } from "@/src/components/Layout/Header/Header";
import {
  useGetEnrichSubscriptions,
  useGetSubscriptionsInfo,
} from "@/src/api/subscription/hooks";
import { getNavigationLinksConfig } from "@/src/components/Layout/SideMenu/Navbar/Navbar.config";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const { subscriptionsInfo } = useGetSubscriptionsInfo();
  useGetEnrichSubscriptions({ enabled: !!subscriptionsInfo });
  const navigationLinksConfig = getNavigationLinksConfig(
    subscriptionsInfo?.subscriptionsCount,
  );

  const toggleDrawer = useCallback(() => setShowDrawer((prev) => !prev), []);

  return (
    <ProtectedRoute>
      <div className="flex min-h-full flex-row justify-start">
        <Header onClick={toggleDrawer} />
        <aside className="hidden min-h-full w-[--main-aside-menu-width] shrink-0 border-r border-white/30 lg:flex">
          <div className="sticky top-0 flex h-dvh w-full flex-col p-4">
            <SideMenu navigationLinks={navigationLinksConfig} />
          </div>
        </aside>
        <main className="w-full p-2 pt-[--mobile-top-padding] tb:p-4 tb:pt-[--desktop-top-padding]">
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
    </ProtectedRoute>
  );
};

export default Layout;
