import React, { type ReactNode } from "react";
import { PublicRoute } from "@/src/providers";
import { PublicHeader } from "@/src/components/PublicLayout/PublicHeader";
import { Footer } from "@/src/components/PublicLayout/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <PublicRoute>
    <div className="flex min-h-[100dvh] flex-col items-center overflow-x-clip p-2 tb:p-4">
      <PublicHeader />
      <main className="flex w-full max-w-7xl grow">{children}</main>
      <Footer />
    </div>
  </PublicRoute>
);

export default Layout;
