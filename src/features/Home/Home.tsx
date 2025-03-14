import React from "react";
import { Intro } from "./components/Intro";
import { Services } from "./components/Services";

export const Home = (): JSX.Element => (
  <div className="flex w-full flex-col gap-4">
    <Intro />
    <Services />
  </div>
);
