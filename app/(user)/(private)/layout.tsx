import React, { type ReactNode } from "react";
import { ProtectedRoute } from "@/src/providers";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <ProtectedRoute>{children}</ProtectedRoute>
);

export default Layout;
