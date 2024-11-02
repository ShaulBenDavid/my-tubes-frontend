import type { SubscriptionsGroupType } from "../subscription";
import type { UserInfoType, UserProfileType } from "../user";

export type SharedLinkParams = {
  token: string;
};

export type UserSharedInfoType = {
  imageUrl?: string | null;
  firstName: string;
  lastName?: string | null;
};

export type GetSharedGroupInfoResponse = Omit<
  SubscriptionsGroupType,
  "subscriptionCount"
> & {
  expirationDate: Date;
  userList: {
    user: UserSharedInfoType;
  };
};

export type GetPublicUserInfo = UserProfileType & { user: UserInfoType };
