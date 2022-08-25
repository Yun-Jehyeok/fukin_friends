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

export type RegisterUserRes = { user: IUser; token: string; };

// 휴대폰 인증
export type PAReq = { name: string; phoneNum: string; };
export type PARes = { success: boolean; num?: string; };
export type PAResFail = { success: boolean; }