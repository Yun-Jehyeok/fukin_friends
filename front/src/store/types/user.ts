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

// 휴대폰 인증
export type PAReq = { name: string; phoneNum: string };
export type PARes = { success: boolean; num?: string };
export type PAResFail = { success: boolean };
