import React from "react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import theme from "@/src/styles/tailwind.theme";
import { Routes } from "@/src/routes";
import { ButtonLink } from "../../ButtonLink";

export const PublicHeader = (): JSX.Element => (
  <header className="sticky top-2 flex h-16 w-full max-w-7xl flex-row items-center rounded-xl bg-spec-text-secondary/50 px-4 backdrop-blur-lg tb:top-4">
    <Link
      href={Routes.DASHBOARD}
      className="flex w-fit flex-row items-center gap-2"
    >
      <FaYoutube fill={theme.primary[700]} size={32} />
      <span className="text-xl font-bold">My Tubes</span>
    </Link>
    <span className="ml-auto">
      <ButtonLink
        href={Routes.LOGIN}
        width="120px"
        className="bg-gradient-to-r from-primary-800 to-pink-500 font-bold hover:bg-gradient-to-l"
      >
        Sign In
      </ButtonLink>
    </span>
  </header>
);
