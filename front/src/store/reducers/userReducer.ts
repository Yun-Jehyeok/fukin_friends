import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { RegisterUserReq, RegisterUserRes } from '../types/user';
import type { ResponseFailure } from '../types';
import { IUser } from '../types/user';

export type UserStateType = {
  user: IUser;
  registerUserLoading: boolean;
  registerUserDone: null | string;
  registerUserError: null | string;
};

const initialState: UserStateType = {
  user: { id: '', name: '', email: '' },
  registerUserLoading: false,
  registerUserDone: null,
  registerUserError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUserRequest(state, action: PayloadAction<RegisterUserReq>) {
      state.registerUserLoading = true;
      state.registerUserDone = null;
      state.registerUserError = null;
    },
    registerUserSuccess(state, action: PayloadAction<RegisterUserRes>) {
      state.registerUserLoading = false;
      state.registerUserDone = action.payload.data.msg;
      state.user = action.payload.data.user;
    },
    registerUserFailure(state, action: PayloadAction<ResponseFailure>) {
      state.registerUserLoading = false;
      state.registerUserError = action.payload.data.msg;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
