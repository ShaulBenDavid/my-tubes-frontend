import React from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdSubscriptions, MdOutlineSubscriptions } from "react-icons/md";
import { Routes } from "@/src/routes";
import theme from "@/src/styles/tailwind.theme";
import type { TabIconsType } from "./MenuTab";

interface NavigationLinksConfig {
  href: Routes;
  label: string;
  icon: TabIconsType;
}

export const getNavigationLinksConfig = (
  count?: number,
): NavigationLinksConfig[] => [
  {
    href: Routes.DASHBOARD,
    label: "dashboard",
    icon: {
      default: <GoHome aria-hidden size={24} stroke={theme.white} />,
      active: <GoHomeFill aria-hidden size={24} fill={theme.white} />,
    },
  },
  {
    href: Routes.SUBSCRIPTIONS,
    label: `subscriptions (${count ?? "--"})`,
    icon: {
      default: (
        <MdOutlineSubscriptions aria-hidden size={24} stroke={theme.white} />
      ),
      active: <MdSubscriptions aria-hidden size={24} fill={theme.white} />,
    },
  },
];
