export type RegisterUserReq = {
  user: {
    name: string;
    email: string;
    password: string;
  };
};

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export type RegisterUserRes = {
  user: IUser;
  token: string;
};
