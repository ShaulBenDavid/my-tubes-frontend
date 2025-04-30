import React from "react";
import Skeleton from "react-loading-skeleton";

const LOADERS_COUNT = 5;

export const AccountLinkLoader = (): JSX.Element => (
  <div className="flex flex-col gap-3">
    {Array.from({ length: LOADERS_COUNT }).map((_, index) => (
      <div key={String(index)} className="flex w-full flex-row gap-2">
        <Skeleton circle height="40px" width="40px" />
        <span className="flex w-full flex-col">
          <Skeleton width="100px" height="15px" />
          <Skeleton width="100%" height="15px" />
        </span>
      </div>
    ))}
  </div>
);
