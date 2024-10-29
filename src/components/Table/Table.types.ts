export type ColumnType<T> = {
  width: number;
  accessor: keyof T;
  header: string;
};

export interface TableRowType {
  [key: string]: any;
}
