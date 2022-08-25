import type { PAReq, PARes, RegisterUserReq, RegisterUserRes } from '../types/user';

import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const registerUser = async (user: RegisterUserReq) => {
  return await axios.post<RegisterUserRes>('/api/user/register', { user });
}

export const sendPhoneAuth = async (paData: PAReq) => {
  return await axios.post<PARes>('/api/auth/phone', { paData });
}
