import React from "react";
import { ColSettings } from "./components/ColSettings";
import { Thead } from "./components/Thead";
import { Tbody } from "./components/Tbody";
import type { ColumnType, TableRowType } from "./Table.types";

interface TableProps<T extends TableRowType> {
  columns: ColumnType<T>[];
  data: T[];
}

export const Table = <T extends TableRowType>({
  columns,
  data,
}: TableProps<T>): JSX.Element => (
  <table className="w-full border-collapse overflow-hidden rounded-xl bg-spec-menu-bg/90">
    <ColSettings columns={columns} />
    <Thead columns={columns} />
    <Tbody columns={columns} data={data} />
  </table>
);
