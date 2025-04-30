export interface UserInfoType {
  username: string;
  imageUrl: string | null;
  email: string;
  firstName: string;
  lastName: string;
}

export type CustomLinkType = Record<"name" | "url", string>;

export interface UserMyLinksType {
  customUrls?: CustomLinkType[];
}

export interface UserProfileType {
  id: number;
  username: string;
  isPublic: boolean;
  description?: string | null;
  imageUrl?: string | null;
  instagramUrl?: string | null;
  twitterUrl?: string | null;
  linkedinUrl?: string | null;
  tiktokUrl?: string | null;
  telegramUrl?: string | null;
  youtubeUrl?: string | null;
}

export type GetUserListParams = {
  search: string;
};
