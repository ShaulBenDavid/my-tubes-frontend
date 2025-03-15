import { Routes } from "@/src/routes";
import type { NavigationColumnLinksType } from "./NavigationColumn/NavigationColumn";

const legalNavigationConfig: NavigationColumnLinksType = [
  // {
  //   title: 'מידניות משתמש',
  //   link: Routes.PRIVACY_POLICY,
  // },
  {
    title: "Privacy Policy",
    link: Routes.ROOT,
  },
  {
    title: "Contact Us",
    link: Routes.ROOT,
  },
];

export const footerNavigationConfig = [
  {
    name: "LEGAL",
    links: legalNavigationConfig,
    isOutSourceLinks: false,
  },
];
