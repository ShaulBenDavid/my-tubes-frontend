export type AuthResponseType = {
  user: {
    first_name: string;
    last_name: string;
    email: string;
  };
  picture: string;
  access_token: string;
};

export type LoginParamsType = {
  code: string;
};
