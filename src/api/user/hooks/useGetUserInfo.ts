import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../user.method";

const GET_USER_INFO_KEY = "getUserInfo";

export const useGetUserInfo = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [GET_USER_INFO_KEY],
    queryFn: getUserInfo,
  });

  return {
    userInfo: data,
    isUserLoading: isLoading,
    isUserError: isError,
  };
};
