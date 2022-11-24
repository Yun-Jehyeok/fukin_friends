import {
  ChangePWReq,
  ChangePWRes,
  GoogleReq,
  GoogleRes,
  LoadUserReq,
  LoadUserRes,
  LoginUserReq,
  LoginUserRes,
  PAReq,
  PARes,
  RegisterUserReq,
  RegisterUserRes,
  SearchUserReq,
  SearchUserRes,
  SendEmailReq,
  SendEmailRes,
} from "../types/user";

import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const registerUser = async (user: RegisterUserReq) => {
  return await axios.post<RegisterUserRes>("/api/user/register", user);
};

export const loginUser = async (user: LoginUserReq) => {
  return await axios.post<LoginUserRes>("/api/auth/login", user);
};

export const changePWUser = async ({ userId, password }: ChangePWReq) => {
  return await axios.put<ChangePWRes>("/api/user/password", {
    userId,
    password,
  });
};

export const loadUser = async (token: LoadUserReq) => {
  return await axios.post<LoadUserRes>("/api/auth/user", { token });
};

export const googleLogin = async (data: GoogleReq) => {
  return await axios.post<GoogleRes>("/api/auth/google", { data });
};

export const sendPhoneAuth = async (paData: PAReq) => {
  return await axios.post<PARes>("/api/auth/phone", { paData });
};

export const searchUser = async (user: SearchUserReq) => {
  return await axios.get<SearchUserRes>(`/api/user/search/${user.name}`);
};

export const sendEmail = async (email: SendEmailReq) => {
  return await axios.post<SendEmailRes>(`/api/auth/email`, email);
};
