import React from "react";
import { FcBarChart, FcBusinessContact, FcReadingEbook } from "react-icons/fc";
import { Routes } from "@/src/routes";
import type { NavigationLinksConfig } from "@/src/components/Layout/SideMenu/Navbar/Navbar.config";
import theme from "@/src/styles/tailwind.theme";

export const settingsNavigationLinksConfig: NavigationLinksConfig[] = [
  {
    id: 0,
    href: Routes.SETTINGS,
    label: "Profile",
    icon: {
      default: <FcReadingEbook aria-hidden size={24} stroke={theme.white} />,
    },
  },
  {
    id: 1,
    href: [Routes.SETTINGS, Routes.ACCOUNT].join(""),
    label: "Account",
    icon: {
      default: <FcBusinessContact aria-hidden size={24} stroke={theme.white} />,
    },
  },
  {
    id: 2,
    href: [Routes.SETTINGS, Routes.MY_TUBES].join(""),
    label: "My Tubes",
    icon: {
      default: <FcBarChart aria-hidden size={24} stroke={theme.white} />,
    },
  },
];
