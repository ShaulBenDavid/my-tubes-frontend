import React from "react";
import Skeleton from "react-loading-skeleton";
import { randomIntFromInterval } from "@/src/utils";

const NUMBER_OF_LOADING_ROWS = 8;

interface TbodyLoaderProps {
  colCount: number;
}

export const TbodyLoader = ({ colCount }: TbodyLoaderProps): JSX.Element => (
  <>
    {Array.from({ length: NUMBER_OF_LOADING_ROWS }).map((_, rowIndex) => (
      <tr
        key={`row-loader-${String(rowIndex)}`}
        className="h-10 border-t border-spec-text-secondary/60 bg-white/10 first:border-spec-text-secondary"
      >
        {Array.from({ length: colCount }).map((__, colIndex) => (
          <td key={`col-loader-${String(colIndex)}`} className="px-2 tb:px-4">
            <Skeleton
              width={`${randomIntFromInterval(20, 100)}%`}
              height="20px"
              count={1}
            />
          </td>
        ))}
      </tr>
    ))}
  </>
);
