import React, { type ReactNode } from "react";
import { PublicRoute } from "@/src/providers";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <PublicRoute>{children}</PublicRoute>
);

export default Layout;
