"use client";

import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card } from "@/src/components/Card";
import type { SubscriptionsGroupType } from "@/src/api/subscription";
import { stringToColor } from "@/src/utils";
import { useMediaQuery } from "@/src/hooks";
import { BarTooltip } from "./BarTooltip";

const MAX_LENGTH = 10;

interface GroupsChartProps {
  data?: SubscriptionsGroupType[];
}

export const GroupsChart = ({ data }: GroupsChartProps): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 1440px)");
  const truncateLabel = (label: string): string =>
    label.length > MAX_LENGTH ? `${label.substring(0, MAX_LENGTH)}...` : label;

  return (
    <Card className="flex h-full flex-col gap-2">
      <h2 className="text-base font-semibold tb:text-lg">
        Subscriptions Count
      </h2>
      {data && (
        <ResponsiveContainer height="99%" width="99%">
          <BarChart data={data}>
            <XAxis
              dataKey={isDesktop ? "title" : "emoji"}
              tick={{ stroke: "white", fontSize: isDesktop ? 16 : 14 }}
              tickFormatter={truncateLabel}
              interval={0}
            />
            <YAxis tick={{ stroke: "white" }} width={40} />
            <Tooltip cursor={{ fill: "#464646" }} content={BarTooltip} />
            <Bar
              dataKey="subscriptionCount"
              barSize={isDesktop ? 15 : 10}
              radius={[10, 10, 0, 0]}
            >
              {data.map(({ title, id }) => (
                <Cell key={`cell-${id}`} fill={stringToColor(title + id)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </Card>
  );
};
