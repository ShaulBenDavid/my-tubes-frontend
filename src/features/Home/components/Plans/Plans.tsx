import React from "react";
import { planOptions } from "./Plans.config";
import { PlanCard } from "./PlanCard";

export const Plans = (): JSX.Element => (
  <section>
    <h2 className="pb-3 text-center text-lg font-bold tb:text-2xl">
      Subscription Plans
    </h2>
    <div className="flex flex-wrap justify-center gap-4">
      {planOptions.map(
        ({
          title,
          description,
          type,
          price,
          className,
          headerClassName,
          disabled,
        }) => (
          <PlanCard
            key={type}
            title={title}
            description={description}
            price={price}
            type={type}
            className={className}
            headerClassName={headerClassName}
            disabled={disabled}
          />
        ),
      )}
    </div>
  </section>
);
