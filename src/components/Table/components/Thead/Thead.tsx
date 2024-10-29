import React from "react";
import type { ColumnType, TableRowType } from "../../Table.types";

interface TheadProps<T extends TableRowType> {
  columns: ColumnType<T>[];
}

export const Thead = <T extends TableRowType>({
  columns,
}: TheadProps<T>): JSX.Element => (
  <thead className="h-10 bg-white/10 text-lg">
    <tr className="overflow-hidden text-left">
      {columns.map((column) => (
        <th
          key={`th-${String(column.accessor)}`}
          className="truncate px-2 capitalize tb:px-4"
        >
          {column.header}
        </th>
      ))}
    </tr>
  </thead>
);
