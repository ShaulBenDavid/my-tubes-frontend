import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import theme from "@/src/styles/tailwind.theme";
import { Routes } from "@/src/routes";
import { UserMenu } from "./UserMenu";
import { ActionButton } from "../../ActionButton";

export const SIDE_DRAWER_ARIA = "navigation-drawer";

interface HeaderProps {
  onClick: () => void;
}

export const Header = ({ onClick }: HeaderProps): JSX.Element => (
  <header className="flex h-12 w-full flex-row items-center pr-2 tb:h-14 tb:px-4">
    <div className="flex flex-row gap-1 lg:hidden">
      <ActionButton
        icon={<RxHamburgerMenu size={24} />}
        onClick={onClick}
        id="open-nav"
        aria-label="menu"
        aria-controls={SIDE_DRAWER_ARIA}
      />
      <Link
        href={Routes.DASHBOARD}
        className="flex w-fit flex-row items-center gap-2"
      >
        <FaYoutube fill={theme.primary[700]} size={32} />
        <span className="text-xl font-bold">My Tubes</span>
      </Link>
    </div>
    <UserMenu />
  </header>
);
