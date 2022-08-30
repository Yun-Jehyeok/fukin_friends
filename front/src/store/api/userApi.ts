import type {
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
} from '../types/user';

import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const registerUser = async (user: RegisterUserReq) => {
  return await axios.post<RegisterUserRes>('/api/user/register', { user });
};

export const loginUser = async (user: LoginUserReq) => {
  return await axios.post<LoginUserRes>('/api/auth/login', { user });
};

export const loadUser = async (token: LoadUserReq) => {
  return await axios.post<LoadUserRes>('/api/auth/user', { token });
};

export const sendPhoneAuth = async (paData: PAReq) => {
  return await axios.post<PARes>('/api/auth/phone', { paData });
};

export const searchUser = async (user: SearchUserReq) => {
  return await axios.get<SearchUserRes>(`/api/user/search/${user}`);
};