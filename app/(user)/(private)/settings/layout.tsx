"use client";

import React, { type ReactNode } from "react";
import { SettingsLayout } from "@/src/features/Settings/SettingsLayout";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <SettingsLayout>{children}</SettingsLayout>
);

export default Layout;
