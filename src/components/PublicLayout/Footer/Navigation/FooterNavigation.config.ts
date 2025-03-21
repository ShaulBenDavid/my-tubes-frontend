import { Routes } from "@/src/routes";
import type { NavigationColumnLinksType } from "./NavigationColumn/NavigationColumn";

const legalNavigationConfig: NavigationColumnLinksType = [
  {
    title: "Privacy Policy",
    link: Routes.PRIVACY_POLICY,
  },
  {
    title: "Contact Us",
    link: Routes.CONTACT_US,
  },
];

export const footerNavigationConfig = [
  {
    name: "LEGAL",
    links: legalNavigationConfig,
    isOutSourceLinks: false,
  },
];
