import React from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdSubscriptions, MdOutlineSubscriptions } from "react-icons/md";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi2";
import { Routes } from "@/src/routes";
import theme from "@/src/styles/tailwind.theme";
import type { TabIconsType } from "./components/MenuTab";

export interface NavigationLinksConfig {
  id: number;
  href: Routes;
  label: string;
  icon: TabIconsType;
  parent?: number;
}

export const getNavigationLinksConfig = (
  count?: number,
): NavigationLinksConfig[] => [
  {
    id: 0,
    href: Routes.DASHBOARD,
    label: "dashboard",
    icon: {
      default: <GoHome aria-hidden size={24} stroke={theme.white} />,
      active: <GoHomeFill aria-hidden size={24} fill={theme.white} />,
    },
  },
  {
    id: 1,
    href: Routes.SUBSCRIPTIONS,
    label: `subscriptions (${count ?? "--"})`,
    icon: {
      default: (
        <MdOutlineSubscriptions aria-hidden size={24} stroke={theme.white} />
      ),
      active: <MdSubscriptions aria-hidden size={24} fill={theme.white} />,
    },
  },
  {
    id: 3,
    href: [Routes.SUBSCRIPTIONS, Routes.GROUP].join("") as Routes,
    label: "groups",
    icon: {
      default: (
        <HiOutlineUserGroup aria-hidden size={24} stroke={theme.white} />
      ),
      active: <HiUserGroup aria-hidden size={24} fill={theme.white} />,
    },
    parent: 1,
  },
];
