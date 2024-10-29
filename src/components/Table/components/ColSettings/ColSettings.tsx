import React from "react";
import type { ColumnType, TableRowType } from "../../Table.types";

interface ColSettingsProps<T extends TableRowType> {
  columns: ColumnType<T>[];
}

export const ColSettings = <T extends TableRowType>({
  columns,
}: ColSettingsProps<T>): JSX.Element => (
  <colgroup>
    {columns.map((column) => (
      <col
        key={`col-set-${String(column.accessor)}`}
        style={{ width: `${column.width}%` }}
      />
    ))}
  </colgroup>
);
