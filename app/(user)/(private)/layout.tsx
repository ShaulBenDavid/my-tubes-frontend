import React, { type ReactNode } from "react";
import { ProtectedRoute } from "@/src/providers";
import { SideMenu } from "@/src/components/Layout/SideMenu";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <ProtectedRoute>
    <div className="flex h-full flex-1 flex-row justify-start">
      <SideMenu />
      <main className="w-full flex-1 justify-center p-4">{children}</main>
    </div>
  </ProtectedRoute>
);

export default Layout;
