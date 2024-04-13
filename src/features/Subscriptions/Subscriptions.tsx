import React from "react";
import { SubscriptionsList } from "./components/SubscriptionsList";

export const Subscriptions = (): JSX.Element => (
  <div className="flex h-full w-full flex-col overflow-hidden">
    <h1 className="text-xl font-semibold">Subscriptions</h1>
    <SubscriptionsList />
  </div>
);
