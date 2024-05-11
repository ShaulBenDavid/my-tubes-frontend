import React from "react";
import { InfoTooltip } from "@/src/components/InfoTooltip";
import { formatDateToCustomFormat } from "@/src/utils";

interface HeaderProps {
  subscriptionsCount: number | string;
  lastSyncDate?: Date;
}

export const Header = ({
  subscriptionsCount,
  lastSyncDate,
}: HeaderProps): JSX.Element => (
  <div className="flex flex-row justify-between pb-2">
    <h1 className="text-xl font-semibold">
      Subscriptions <span>({subscriptionsCount})</span>
    </h1>
    {lastSyncDate && (
      <div className="flex flex-row gap-2">
        <span>
          last sync:{" "}
          <time className="font-bold">
            {formatDateToCustomFormat(new Date(lastSyncDate))}
          </time>
        </span>
        <InfoTooltip
          title={
            <>
              Last Sync: This indicates the most recent time we synchronized
              your subscribers with your YouTube account.
              <br />
              (For Lite users we sync once a month) only if you are logged in.
            </>
          }
        />
      </div>
    )}
  </div>
);
