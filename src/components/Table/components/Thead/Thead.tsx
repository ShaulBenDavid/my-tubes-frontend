import React from "react";
import type { ColumnType, TableRowType } from "../../Table.types";

interface TheadProps<T extends TableRowType> {
  columns: ColumnType<T>[];
}

export const Thead = <T extends TableRowType>({
  columns,
}: TheadProps<T>): JSX.Element => (
  <thead className="h-10 text-lg">
    <tr className="text-left">
      {columns.map((column) => (
        <th key={`th-${String(column.accessor)}`} className="px-2 tb:px-4">
          {column.header}
        </th>
      ))}
    </tr>
  </thead>
);
