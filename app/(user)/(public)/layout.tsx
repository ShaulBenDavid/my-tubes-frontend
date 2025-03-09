import React, { type ReactNode } from "react";
import { PublicRoute } from "@/src/providers";
import { PublicHeader } from "@/src/components/PublicLayout/PublicHeader";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <PublicRoute>
    <div className="flex min-h-screen flex-col items-center overflow-x-clip p-2 tb:p-4">
      <PublicHeader />
      <main className="flex w-full max-w-7xl grow">{children}</main>
    </div>
  </PublicRoute>
);

export default Layout;
