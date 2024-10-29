import React from "react";
import type { ColumnType, TableRowType } from "../../Table.types";

interface TbodyProps<T extends TableRowType> {
  columns: ColumnType<T>[];
  data: T[];
}

export const Tbody = <T extends TableRowType>({
  columns,
  data,
}: TbodyProps<T>): JSX.Element => (
  <tbody>
    {data.map((row, rowIndex) => (
      <tr
        // eslint-disable-next-line react/no-array-index-key
        key={`table-row-${rowIndex}`}
        className="h-10 border-t border-spec-text-secondary/60 first:border-spec-text-secondary"
      >
        {columns.map(({ accessor }) => (
          <td key={`col-row-${accessor as string}`} className="px-2 tb:px-4">
            {row[accessor]}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);
