import { axiosInstance } from '.';
import type { RegisterUserReq, RegisterUserRes } from '../types/user';

export const registerUser = ({ user }: RegisterUserReq) =>
  axiosInstance.post<RegisterUserRes>('/user/register', { user });
