export interface IUser {
  id: string;
  name: string;
  email: string;
}

// 회원가입
export type RegisterUserReq = {
  name: string;
  email: string;
  password: string;
  phone: string;
};
export type RegisterUserRes = {
  isSuccess: boolean;
  user: IUser;
  token: string;
};

// 로그인
export type LoginUserReq = {
  email: string;
  password: string;
};
export type LoginUserRes = { isSuccess: boolean; user: IUser; token: string };

// 비밀번호 변경
export type ChangePWReq = {
  userId: string;
  password: string;
};
export type ChangePWRes = { isSuccess: boolean; user: IUser; token: string };

// 유저 인증
export type LoadUserReq = {
  token: string | null;
};
export type LoadUserRes = {
  isSuccess: boolean;
  user: IUser;
};

// 로그아웃
export type LogoutUserReq = {
  token: string;
};

// 유저 검색
export type SearchUserReq = {
  name: string;
};
export type SearchUserRes = {
  users: IUser[];
};

// 휴대폰 인증
export type PAReq = { phoneNum: string };
export type PARes = { isSuccess: boolean; num: string };

// 이메일 보내기
export type SendEmailReq = { email: string };
export type SendEmailRes = { isSuccess: boolean };
