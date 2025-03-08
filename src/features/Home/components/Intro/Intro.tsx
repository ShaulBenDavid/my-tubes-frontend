import React from "react";
import S from "./Intro.module.css";

export const Intro = (): JSX.Element => (
  <section className={S.intoBackground}>
    <h1 className={S.title}>
      <span className={S.coloredText}>Build</span> your own{" "}
      <span className={S.coloredText}>Tube</span> with MyTubes – customize,
      share, and manage your{" "}
      <span className={S.coloredText}>Subscriptions.</span>
    </h1>
  </section>
);
