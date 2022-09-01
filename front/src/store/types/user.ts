export interface IUser {
  id: string;
  name: string;
  email: string;
}

// 회원가입
export type RegisterUserReq = {
  user: {
    name: string;
    email: string;
    password: string;
  };
};
export type RegisterUserRes = { user: IUser; token: string };

// 로그인
export type LoginUserReq = {
  user: {
    email: string;
    password: string;
  };
};
export type LoginUserRes = { user: IUser; token: string };

// 비밀번호 변경
export type ChangePWReq = {
  userId: string | string[] | undefined;
  password: string;
};
export type ChangePWRes = { user: IUser; token: string };

// 유저 인증
export type LoadUserReq = {
  token: string | null;
};
export type LoadUserRes = { 
  id: string;
  name: string;
  email: string;
};

// 로그아웃
export type LogoutUserReq = {
  token: string | null;
};

// 유저 검색
export type SearchUserReq = {
  name: string;
};
export type SearchUserRes = { 
  users: IUser[];
};

// 휴대폰 인증
export type PAReq = { name: string; phoneNum: string };
export type PARes = { success: boolean; num?: string };
export type PAResFail = { success: boolean };

// 이메일 보내기
export type SendEmailReq = {
  email: string;
};
export type SendEmailRes = { 
  isSuccess: boolean;
};
