import type { SubscriptionsGroupType } from "../subscription";

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
