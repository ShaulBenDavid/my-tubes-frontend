import React from "react";
import Link from "next/link";
import { Routes } from "@/src/routes";
import { ButtonLink } from "../../ButtonLink";
import { Logo } from "../../Logo";

export const PublicHeader = (): JSX.Element => (
  <header className="sticky top-2 z-20 flex h-16 w-full max-w-7xl flex-row items-center rounded-xl bg-spec-text-secondary/50 px-4 backdrop-blur-lg tb:top-4">
    <Link href={Routes.ROOT}>
      <Logo />
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
