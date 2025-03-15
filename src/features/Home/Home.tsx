import React from "react";
import { Intro } from "./components/Intro";
import { Services } from "./components/Services";
import { AppShowCase } from "./components/AppShowCase";

export const Home = (): JSX.Element => (
  <div className="flex w-full flex-col gap-8">
    <Intro />
    <AppShowCase />
    <Services />
  </div>
);
