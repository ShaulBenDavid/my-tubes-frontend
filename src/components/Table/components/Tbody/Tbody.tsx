import React from "react";
import type { ColumnType, TableRowType } from "../../Table.types";
import { TbodyLoader } from "./Tbody.loader";
import { TbodyError } from "./Tbody.error";

interface TbodyProps<T extends TableRowType> {
  columns: ColumnType<T>[];
  data?: T[];
  isLoading: boolean;
}

export const Tbody = <T extends TableRowType>({
  columns,
  data,
  isLoading,
}: TbodyProps<T>): JSX.Element => (
  <tbody>
    {isLoading && <TbodyLoader colCount={columns.length} />}
    {!isLoading &&
      !!data?.length &&
      data.map((row, rowIndex) => (
        <tr
          // eslint-disable-next-line react/no-array-index-key
          key={`table-row-${rowIndex}`}
          className="h-10 border-t border-spec-text-secondary/60 text-sm duration-75 ease-in-out first:border-spec-text-secondary tb:hover:bg-white/10"
        >
          {columns.map(({ accessor, render }) => (
            <td
              key={`col-row-${accessor as string}`}
              className="px-2 capitalize tb:px-4"
            >
              {render ? render(row, rowIndex) : row[accessor]}
            </td>
          ))}
        </tr>
      ))}
    {!isLoading && !data?.length && <TbodyError colCount={columns.length} />}
  </tbody>
);
