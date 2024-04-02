import React, { type ReactNode } from "react";
import { PublicRoute } from "@/src/providers";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <PublicRoute>
    <main className="w-full flex-1 justify-center">{children}</main>
  </PublicRoute>
);

export default Layout;
