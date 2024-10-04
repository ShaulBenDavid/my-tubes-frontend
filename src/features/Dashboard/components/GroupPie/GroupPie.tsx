import React from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";
import { Card } from "@/src/components/Card";
import { InfoTooltip } from "@/src/components/InfoTooltip";

const COLORS = ["#84d2f6", "#ff9e00"];

interface GroupPieProps {
  totalGroupedSubscriptions: number;
  totalSubscriptions: number;
}

export const GroupPie = ({
  totalGroupedSubscriptions,
  totalSubscriptions,
}: GroupPieProps): JSX.Element => {
  const data = [
    { name: "Grouped", value: totalGroupedSubscriptions },
    {
      name: "Ungrouped",
      value: totalSubscriptions - totalGroupedSubscriptions,
    },
  ];

  const legendPayload = data.map(({ name, value }, index) => ({
    value: `${name} - ${value}`,
    id: name,
    color: COLORS[index],
  }));

  return (
    <Card className="col-span-1 flex h-full flex-col items-center gap-2">
      <span className="flex w-full flex-row justify-center">
        <h2 className="w-full text-start text-base font-semibold tb:text-lg">
          Subscriptions Groups
        </h2>
        <InfoTooltip title="This pie chart illustrates the count of grouped subscriptions compared to ungrouped subscriptions." />
      </span>
      <div className="flex flex-1 items-center justify-center tb:items-start tb:pt-6">
        <PieChart width={162} height={230}>
          <Pie
            data={[{ value: 100 }]}
            cx={75}
            cy={75}
            innerRadius={60}
            outerRadius={80}
            stroke="transparent"
            fill="#ffffff2b"
            dataKey="value"
            isAnimationActive={false}
          />
          <Pie
            data={data}
            cx={75}
            cy={75}
            innerRadius={60}
            outerRadius={80}
            minAngle={20}
            stroke="transparent"
            paddingAngle={5}
            dataKey="value"
            cornerRadius={10}
          >
            {data.map(({ name }, index) => (
              <Cell
                key={`cell-${name}`}
                fill={COLORS[index]}
                style={{ outline: "none" }}
              />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            payload={legendPayload}
          />
        </PieChart>
      </div>
    </Card>
  );
};
