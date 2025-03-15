import React from "react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { Routes } from "@/src/routes";
import { NavigationColumn } from "./NavigationColumn";
import { footerNavigationConfig } from "./FooterNavigation.config";
import theme from "@/src/styles/tailwind.theme";

export const FooterNavigation = (): JSX.Element => (
  <nav
    className="md:flex md:justify-between"
    id="footer-nav"
    aria-label="Footer"
  >
    <div className="mb-6 md:mb-0">
      <Link
        href={Routes.ROOT}
        className="flex w-fit flex-row items-center gap-2"
      >
        <FaYoutube fill={theme.primary[700]} size={32} />
        <span className="text-xl font-bold">My Tubes</span>
      </Link>
    </div>
    <ul className="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-6">
      {footerNavigationConfig.map(({ name, links, isOutSourceLinks }) => (
        <li key={name}>
          <NavigationColumn
            name={name}
            links={links}
            isOutSourceLinks={isOutSourceLinks}
          />
        </li>
      ))}
    </ul>
  </nav>
);
