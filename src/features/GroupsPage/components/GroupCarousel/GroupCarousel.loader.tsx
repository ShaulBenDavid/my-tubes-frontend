import React from "react";
import Skeleton from "react-loading-skeleton";

export const GroupCarouselLoader = (): JSX.Element => (
  <div className="flex h-full flex-col gap-4 overflow-hidden">
    {Array.from({ length: 5 }).map((_, index) => (
      <div
        key={String(index)}
        aria-label="loader indicator"
        className="h-fit shrink-0 overflow-hidden"
      >
        <Skeleton width="180px" height="20px" count={1} className="mb-2" />
        <div className="flex flex-row gap-4">
          <Skeleton width="250px" height="150px" count={1} />
          <Skeleton width="250px" height="150px" count={1} />
          <Skeleton width="250px" height="150px" count={1} />
          <Skeleton width="250px" height="150px" count={1} />
          <Skeleton width="250px" height="150px" count={1} />
          <Skeleton width="250px" height="150px" count={1} />
        </div>
      </div>
    ))}
  </div>
);
