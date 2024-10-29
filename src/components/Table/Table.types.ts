import type { ReactNode } from "react";

export type ColumnType<T> = {
  width: number;
  accessor: keyof T;
  header: string;
  render?: (data: T[keyof T]) => ReactNode;
};

export interface TableRowType {
  [key: string]: any;
}
