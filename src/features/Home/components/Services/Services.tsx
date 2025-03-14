import React from "react";
import { servicesConfig } from "./Services.config";
import { Card } from "@/src/components/Card";

export const Services = (): JSX.Element => (
  <section>
    <h2 className="text-center text-lg font-bold tb:text-2xl">
      What We Offer!
    </h2>
    <p className="text-center text-base tb:text-lg">
      There are countless reasons to use MyTubes.
    </p>

    <div className="flex flex-row flex-wrap justify-center gap-2 pt-4 sm:gap-6 tb:justify-between">
      {servicesConfig.map(({ icon, text, borderColor }) => (
        <Card
          key={text}
          className="flex min-w-[160px] max-w-full flex-1 flex-col items-center justify-center gap-3 border duration-200 hover:scale-105 sm:h-40"
          style={{ borderColor }}
        >
          {icon}
          <h3 className="text-center text-base font-semibold tb:text-lg">
            {text}
          </h3>
        </Card>
      ))}
    </div>
  </section>
);
