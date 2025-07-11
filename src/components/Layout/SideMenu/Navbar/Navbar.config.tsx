import React from "react";
import { GoHome, GoHomeFill, GoHistory } from "react-icons/go";
import {
  MdSubscriptions,
  MdOutlineSubscriptions,
  MdOutlineSupervisorAccount,
  MdSupervisorAccount,
} from "react-icons/md";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi2";
import { IoSettings, IoSettingsOutline } from "react-icons/io5";
import { SiYoutubemusic } from "react-icons/si";
import { BiLike } from "react-icons/bi";
import { Routes } from "@/src/routes";
import theme from "@/src/styles/tailwind.theme";
import type { TabIconsType } from "./components/MenuTab";

export interface NavigationLinksConfig {
  id: number;
  href: Routes | string;
  label: string;
  icon: TabIconsType;
  parent?: number;
  isOutSource?: boolean;
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
    href: [Routes.SUBSCRIPTIONS, Routes.GROUP].join(""),
    label: "groups",
    icon: {
      default: (
        <HiOutlineUserGroup aria-hidden size={24} stroke={theme.white} />
      ),
      active: <HiUserGroup aria-hidden size={24} fill={theme.white} />,
    },
    parent: 1,
  },
  {
    id: 7,
    href: Routes.USERS,
    label: "users",
    icon: {
      default: (
        <MdOutlineSupervisorAccount
          aria-hidden
          size={24}
          stroke={theme.white}
        />
      ),
      active: <MdSupervisorAccount aria-hidden size={24} fill={theme.white} />,
    },
  },
  {
    id: 4,
    href: "https://www.youtube.com/feed/history",
    label: "history",
    icon: {
      default: <GoHistory aria-hidden size={24} stroke={theme.white} />,
    },
    isOutSource: true,
  },
  {
    id: 5,
    href: "https://www.youtube.com/playlist?list=LL",
    label: "likes videos",
    icon: {
      default: <BiLike aria-hidden size={24} stroke={theme.white} />,
    },
    isOutSource: true,
  },
  {
    id: 6,
    href: "https://music.youtube.com/",
    label: "music",
    icon: {
      default: <SiYoutubemusic aria-hidden size={24} fill={theme.white} />,
    },
    isOutSource: true,
  },
  {
    id: 7,
    href: Routes.SETTINGS,
    label: "settings",
    icon: {
      default: <IoSettingsOutline aria-hidden size={24} stroke={theme.white} />,
      active: <IoSettings aria-hidden size={24} fill={theme.white} />,
    },
  },
];
