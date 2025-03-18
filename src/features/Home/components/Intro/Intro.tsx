import React from "react";
import S from "./Intro.module.css";
import { ButtonLink } from "@/src/components/ButtonLink";
import { Routes } from "@/src/routes";

export const Intro = (): JSX.Element => (
  <section className={S.intoBackground}>
    <h1 className={S.title}>
      <span className={S.coloredText}>Build</span> your own{" "}
      <span className={S.coloredText}>Tube</span> with MyTubes – customize,
      share, and manage your{" "}
      <span className={S.coloredText}>Subscriptions.</span>
    </h1>
    <div className="flex animate-[fadeIn_1s_0.3s_ease-in_forwards] flex-col items-center gap-4 opacity-0">
      <p className="max-w-2xl text-center text-base tb:text-lg">
        My-Tubes is a comprehensive tool for managing your YouTube channels,
        following other channels, and accessing a detailed statistics dashboard.
        Optimize your content and track your growth with ease.
      </p>
      <ButtonLink
        href={Routes.LOGIN}
        width="150px"
        className="bg-gradient-to-r from-primary-800 to-pink-500 font-bold hover:bg-gradient-to-l"
      >
        Get Started
      </ButtonLink>
    </div>
  </section>
);
