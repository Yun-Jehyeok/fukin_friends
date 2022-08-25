import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { RegisterUserReq, RegisterUserRes } from '../types/user';
import type { ResponseFailure } from '../types';
import { IUser } from '../types/user';

export type UserStateType = {
  user: IUser;
  userLoading: boolean;
  errMsg: null | string;
  token: null | string;
};

const initialState: UserStateType = {
  user: { id: '', name: '', email: '' },
  userLoading: false,
  errMsg: null,
  token: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUserRequest(state, action: PayloadAction<RegisterUserReq>) {
      state.userLoading = true;
      state.errMsg = null;
    },
    registerUserSuccess(state, action: PayloadAction<RegisterUserRes>) {
      state.userLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    registerUserFailure(state, action: PayloadAction<ResponseFailure>) {
      state.userLoading = false;
      state.errMsg = action.payload.data.msg;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
