export type TUser = {
  email: string;
  role: string;
  iat: number;
  exp: number;
};

export type TUserType = {
  _id: string;
  name: string;
  email: string;
  password: string;
  address: string;
  role: string;
  isBlocked: boolean;
};
