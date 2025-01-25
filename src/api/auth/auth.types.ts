export enum Roles {
  CREATOR = "creator",
  USER = "user",
}

export type AuthResponseType = {
  accessToken: string;
  googleToken: string;
  role: Roles;
};

export type LoginParamsType = {
  code: string;
};
