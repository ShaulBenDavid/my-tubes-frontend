import type { ReactNode } from "react";

export type ColumnType<T> = {
  width: number;
  accessor: keyof T;
  header: string;
  infoTooltip?: string;
  render?: (data: T, row: number) => ReactNode;
};

export interface TableRowType {
  [key: string]: any;
}
