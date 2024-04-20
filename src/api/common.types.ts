export type PaginationType<T> = {
  count: number;
  next?: number | null;
  previous?: number | null;
  results: T[];
};

export type PaginationParams = {
  page?: number;
  pageSize?: number;
  pageParam?: number;
};
