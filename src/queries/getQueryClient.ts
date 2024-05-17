import { cache } from "react";
import { QueryClient } from "@tanstack/react-query";
import ms from "ms";

export const appQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      staleTime: ms("2h"),
    },
  },
});

export const getQueryClient = cache(() => new QueryClient());
