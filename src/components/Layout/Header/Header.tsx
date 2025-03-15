import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Routes } from "@/src/routes";
import { UserMenu } from "./UserMenu";
import { ActionButton } from "../../ActionButton";
import { Logo } from "../../Logo";

export const SIDE_DRAWER_ARIA = "navigation-drawer";

interface HeaderProps {
  onClick: () => void;
}

export const Header = ({ onClick }: HeaderProps): JSX.Element => (
  <header className="fixed right-0 z-50 flex h-12 w-full shrink-0 flex-row items-center bg-spec-space-bg pr-2 tb:h-14 tb:px-4 lg:w-[calc(100%-var(--main-aside-menu-width))]">
    <div className="flex flex-row gap-1 lg:hidden">
      <ActionButton
        icon={<RxHamburgerMenu size={24} />}
        onClick={onClick}
        id="open-nav"
        aria-label="menu"
        aria-controls={SIDE_DRAWER_ARIA}
      />
      <Link href={Routes.DASHBOARD}>
        <Logo />
      </Link>
    </div>
    <UserMenu />
  </header>
);
