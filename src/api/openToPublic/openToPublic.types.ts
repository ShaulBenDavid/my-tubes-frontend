import type { SubscriptionsGroupType } from "../subscription";

export type SharedLinkParams = {
  token: string;
};

export type UserSharedInfoType = {
  username: string;
  imageUrl: string | null;
  email: string;
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
