import type { PaginationParams } from "../common.types";
import type { GroupType } from "../subscription";
import type { UserInfoType, UserProfileType } from "../user";

export type SharedLinkParams = {
  token: string;
};

export type UserSharedInfoType = {
  imageUrl?: string | null;
  firstName: string;
  lastName?: string | null;
};

export type GetSharedGroupInfoResponse = GroupType & {
  expirationDate: Date;
  userList: {
    user: UserSharedInfoType;
  };
};

export type GetPublicUserInfo = UserProfileType & { user: UserInfoType };

export type GetPublicGroupsParams = PaginationParams & {
  username: string;
};

export type GetPublicGroupInfoResponse = GroupType & {
  userList: {
    user: UserSharedInfoType;
  };
};
