export interface UserInfoType {
  username: string;
  imageUrl: string | null;
  email: string;
  firstName: string;
  lastName: string;
}

export interface UserProfileType {
  username: string;
  isPublic: boolean;
  instagramUrl?: string | null;
  twitterUrl?: string | null;
  linkedinUrl?: string | null;
  youtubeUrl?: string | null;
}
