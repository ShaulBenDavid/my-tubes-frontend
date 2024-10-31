import React from "react";
import { InfoTooltip } from "@/src/components/InfoTooltip";
import type { ColumnType, TableRowType } from "../../Table.types";

interface TheadProps<T extends TableRowType> {
  columns: ColumnType<T>[];
}

export const Thead = <T extends TableRowType>({
  columns,
}: TheadProps<T>): JSX.Element => (
  <thead className="h-10 shrink-0 bg-white/10 text-lg">
    <tr className="overflow-hidden text-left">
      {columns.map(({ accessor, header, infoTooltip }) => (
        <th key={`th-${String(accessor)}`} className="px-2 tb:px-4">
          <div className="flex flex-row items-center gap-2">
            {infoTooltip && <InfoTooltip title={infoTooltip} />}
            <span className="truncate capitalize">{header}</span>
          </div>
        </th>
      ))}
    </tr>
  </thead>
);
