"use client";

import React from "react";
import { useGetSubscriptions } from "@/src/api/subscription/hooks";
import { Card } from "@/src/components/Card";

export const SubscriptionsList = (): JSX.Element => {
  useGetSubscriptions();

  return (
    <div className="h-full w-96 overflow-y-auto bg-white">
      <Card>s</Card>
    </div>
  );
};
