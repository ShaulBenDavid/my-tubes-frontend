import React from "react";
import { Intro } from "./components/Intro";
import { Services } from "./components/Services";
import { AppShowCase } from "./components/AppShowCase";
import { Sharing } from "./components/Sharing";
import { Plans } from "./components/Plans";

export const Home = (): JSX.Element => (
  <div className="flex w-full flex-col gap-8 pb-6">
    <Intro />
    <AppShowCase />
    <Services />
    <Sharing />
    <Plans />
  </div>
);
