import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export const useQueryParamSelect = <T extends string>(
  paramName: string,
  defaultValue: T,
) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const selectedValue: T = (searchParams.get(paramName) as T) ?? defaultValue;

  const handleChange = useCallback(
    (term: T): void => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(paramName, term);
      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, replace, paramName],
  );

  return { selectedValue, handleChange, searchParams, pathname, replace };
};
