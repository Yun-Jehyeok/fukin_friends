import type { ResponseData, ResponseStatus } from '.';

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

export type RegisterUserRes = ResponseStatus & {
  data: ResponseData & {
    user: IUser;
    token: string;
  };
};
