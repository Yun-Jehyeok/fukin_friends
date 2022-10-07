export interface IUser {
  id: string;
  name: string;
  email: string;
}

// 회원가입
export interface RegisterUserReq {
  name: string;
  email: string;
  password: string;
  phone: string;
}
export interface RegisterUserRes {
  isSuc: boolean;
  user: IUser;
  token: string;
}

// 로그인
export interface LoginUserReq {
  email: string;
  password: string;
}
export interface LoginUserRes {
  isSuc: boolean;
  user: IUser;
  token: string;
}

// 비밀번호 변경
export interface ChangePWReq {
  userId: string;
  password: string;
}
export interface ChangePWRes {
  isSuc: boolean;
  user: IUser;
  token: string;
}

// 유저 인증
export interface LoadUserReq {
  token: string | null;
}
export interface LoadUserRes {
  isSuc: boolean;
  user: IUser;
}

// 로그아웃
export interface LogoutUserReq {
  token: string;
}

// 유저 검색
export interface SearchUserReq {
  name: string;
}
export interface SearchUserRes {
  users: IUser[];
}

// 휴대폰 인증
export interface PAReq {
  phoneNum: string;
}
export interface PARes {
  isSuc: boolean;
  num: string;
}

// 이메일 보내기
export interface SendEmailReq {
  email: string;
}
export interface SendEmailRes {
  isSuc: boolean;
}
