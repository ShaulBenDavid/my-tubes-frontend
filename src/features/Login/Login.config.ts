export const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";

export const scope = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/youtube.readonly",
  "https://www.googleapis.com/auth/youtube.channel-memberships.creator",
].join(" ");
