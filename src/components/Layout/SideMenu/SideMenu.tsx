import React from "react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { Routes } from "@/src/routes";
import theme from "@/src/styles/tailwind.theme";
import { Navbar } from "./Navbar";

export const SideMenu = (): JSX.Element => (
  <aside className="h-full w-64 border-r-2 border-white/30 p-4">
    <Link
      href={Routes.DASHBOARD}
      className="flex w-fit flex-row items-center gap-2"
    >
      <FaYoutube fill={theme.primary[700]} size={32} />
      <span className="text-xl font-bold">My Tubes</span>
    </Link>
    <Navbar />
  </aside>
);
