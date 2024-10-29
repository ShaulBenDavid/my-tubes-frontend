import React from "react";
import { EmptyState } from "@/src/components/EmptyState";
import NoDataSVG from "@/src/assets/images/NoDataSVG.svg";

interface TbodyErrorProps {
  colCount: number;
}

export const TbodyError = ({ colCount }: TbodyErrorProps): JSX.Element => (
  <tr className="h-80 border-t border-spec-text-secondary">
    <td colSpan={colCount}>
      <div className="flex h-full w-full items-center justify-center">
        <EmptyState header="Couldn't find data." svgUrl={NoDataSVG} />
      </div>
    </td>
  </tr>
);
