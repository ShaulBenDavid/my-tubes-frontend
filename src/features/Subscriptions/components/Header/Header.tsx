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
  <div className="inside-header flex flex-row justify-between pb-2">
    <h1 className="font-semibold tb:text-xl">
      Subscriptions <span>({subscriptionsCount})</span>
    </h1>
    {lastSyncDate && (
      <div className="flex flex-row items-center gap-2 text-sm tb:text-base">
        <span>
          <span className="hidden xs:inline">last sync: </span>
          <time className="font-bold">
            {formatDateToCustomFormat(new Date(lastSyncDate))}
          </time>
        </span>
        <InfoTooltip
          place="bottom-start"
          title={
            <>
              Last Sync: This indicates the most recent time we synchronized
              your subscribers with your YouTube account.
              <br />
              We sync once a week only if you are logged in.
            </>
          }
        />
      </div>
    )}
  </div>
);
