import React from "react";
import Skeleton from "react-loading-skeleton";

const LOADERS_COUNT = 5;

export const ChannelCardLoader = (): JSX.Element => (
  <div className="flex flex-col gap-6">
    {Array.from({ length: LOADERS_COUNT }).map((key) => (
      <div key={String(key)} className="flex flex-col gap-2">
        <span className="flex flex-row gap-2">
          <Skeleton
            circle
            height="40px"
            width="40px"
            containerClassName="avatar-skeleton"
          />
          <Skeleton
            width="100px"
            height="20px"
            containerClassName="h-6 pt-[9px]"
          />
        </span>
        <Skeleton width="100%" height="20px" count={2} />
      </div>
    ))}
  </div>
);
