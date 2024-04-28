import React from "react";
import Skeleton from "react-loading-skeleton";

const LOADERS_COUNT = 5;

export const GroupCardLoader = (): JSX.Element => (
  <>
    {Array.from({ length: LOADERS_COUNT }).map((_, index) => (
      <div key={String(index)} className="flex flex-col gap-4">
        <span className="flex flex-row gap-2">
          <Skeleton width="100px" height="20px" containerClassName="h-6" />
        </span>
        <span>
          <Skeleton width="100%" height="20px" count={2} />
          <Skeleton width="66%" height="20px" count={1} />
        </span>
      </div>
    ))}
  </>
);
