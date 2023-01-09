export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface RegisterUserReq {
  name: string;
  email: string;
  password: string;
  phone: string;
}
export interface RegisterUserRes {
  success: boolean;
  user: IUser;
  token: string;
}

export interface LoginUserReq {
  email: string;
  password: string;
}
export interface LoginUserRes {
  success: boolean;
  user: IUser;
  token: string;
}

export interface GoogleReq {
  name: string;
  email: string;
  token: string;
}
export interface GoogleRes {
  success: boolean;
  user: IUser;
  token: string;
}

export interface ChangePWReq {
  userId: string;
  password: string;
}
export interface ChangePWRes {
  success: boolean;
  user: IUser;
  token: string;
}

export interface LoadUserReq {
  token: string | null;
}
export interface LoadUserRes {
  success: boolean;
  user: IUser;
}

export interface LogoutUserReq {
  token: string;
}

export interface SearchUserReq {
  name: string;
}
export interface SearchUserRes {
  users: IUser[];
}

export interface PAReq {
  phoneNum: string;
}
export interface PARes {
  success: boolean;
  num: string;
}

export interface SendEmailReq {
  email: string;
}
