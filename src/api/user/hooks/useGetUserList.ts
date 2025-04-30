import { useQuery } from "@tanstack/react-query";
import { getUserList } from "../user.method";
import type { GetUserListParams } from "../user.types";

const GET_USER_LIST_KEY = "getUserList";

interface UseGetUserListProps {
  enabled: boolean;
  params: GetUserListParams;
}

export const useGetUserList = ({ enabled, params }: UseGetUserListProps) => {
  const { isFetching, isError, data } = useQuery({
    queryKey: [GET_USER_LIST_KEY, params],
    queryFn: () => getUserList(params),
    enabled,
  });

  return {
    userList: data?.results,
    isUserListLoading: isFetching,
    isUserListError: isError,
  };
};
