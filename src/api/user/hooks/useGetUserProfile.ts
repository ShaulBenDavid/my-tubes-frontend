import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../user.method";

export const GET_USER_PROFILE_KEY = "getUserProfile";

export const useGetUserProfile = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [GET_USER_PROFILE_KEY],
    queryFn: getUserProfile,
  });

  return {
    userProfile: data,
    isUserLoading: isLoading,
    isUserError: isError,
  };
};
