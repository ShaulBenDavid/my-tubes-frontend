import React from "react";
import Link from "next/link";
import { Routes } from "@/src/routes";
import { WEBSITE_URL } from "@/src/constants";
import { Navbar } from "./Navbar";
import type { NavigationLinksConfig } from "./Navbar/Navbar.config";
import { Logo } from "../../Logo";

interface SideMenuProps {
  navigationLinks: NavigationLinksConfig[];
  onClick?: () => void;
}

export const SideMenu = ({
  navigationLinks,
  onClick,
}: SideMenuProps): JSX.Element => (
  <>
    <Link href={Routes.DASHBOARD} className="px-2 pb-4">
      <Logo />
    </Link>
    <Navbar onClick={onClick} navigationLinks={navigationLinks} />
    <footer className="mt-auto">
      <span className="text-sm opacity-70">
        @ {new Date().getFullYear()}
        <a
          href={WEBSITE_URL}
          target="_blank"
          rel="noreferrer"
          className="ml-1 hover:underline"
        >
          MyTubes
        </a>
      </span>
    </footer>
  </>
);
