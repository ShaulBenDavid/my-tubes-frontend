import React, { type ReactNode } from "react";
import { ProtectedRoute } from "@/src/providers";
import { SideMenu } from "@/src/components/Layout/SideMenu";
import { Header } from "@/src/components/Layout/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <ProtectedRoute>
    <div className="flex h-full flex-1 flex-row justify-start">
      <SideMenu />
      <div className="flex w-full flex-col">
        <Header />
        <main className="w-full flex-1 justify-center overflow-hidden p-4">
          {children}
        </main>
      </div>
    </div>
  </ProtectedRoute>
);

export default Layout;
