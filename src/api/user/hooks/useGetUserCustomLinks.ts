import { useQuery } from "@tanstack/react-query";
import { getUserCustomLinks } from "../user.method";

export const GET_USER_CUSTOM_LINKS_KEY = "getUserCustomLinks";

export const useGetUserCustomLinks = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [GET_USER_CUSTOM_LINKS_KEY],
    queryFn: getUserCustomLinks,
  });

  return {
    userCustomLinks: data,
    isCustomLinksLoading: isLoading,
    isCustomLinksError: isError,
  };
};
