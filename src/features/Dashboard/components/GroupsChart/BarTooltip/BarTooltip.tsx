import React from "react";
import type { TooltipProps } from "recharts";
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

type BarTooltipProps = TooltipProps<ValueType, NameType>;

export const BarTooltip = ({
  active,
  payload,
}: BarTooltipProps): JSX.Element | null => {
  if (!(active && payload && payload.length)) {
    return null;
  }
  const title = payload[0].payload.title as string;

  return (
    <div className="rounded-xl bg-spec-text-secondary p-2">
      <p>
        <strong>Subscriptions Count:</strong>&nbsp;
        {payload[0].value}
      </p>
      <p>
        <strong>Title:</strong>&nbsp;
        {title}
      </p>
    </div>
  );
};
