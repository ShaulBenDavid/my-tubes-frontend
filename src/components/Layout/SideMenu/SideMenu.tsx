import React from "react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { Routes } from "@/src/routes";
import theme from "@/src/styles/tailwind.theme";
import { Navbar } from "./Navbar";
import { WEBSITE_URL } from "@/src/constants";

export const SideMenu = (): JSX.Element => (
  <aside className="flex h-full w-64 flex-col border-r border-white/30 p-4">
    <Link
      href={Routes.DASHBOARD}
      className="flex w-fit flex-row items-center gap-2 px-2"
    >
      <FaYoutube fill={theme.primary[700]} size={32} />
      <span className="text-xl font-bold">My Tubes</span>
    </Link>
    <Navbar />
    <footer className="mt-auto">
      <span className="text-sm opacity-70">
        @ {new Date().getFullYear()}
        <a
          href={WEBSITE_URL}
          target="_blank"
          rel="noreferrer"
          className="ml-1 hover:underline"
        >
          DevWizard
        </a>
      </span>
    </footer>
  </aside>
);
