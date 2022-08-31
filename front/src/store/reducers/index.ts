import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from '@reduxjs/toolkit';
import type { AnyAction, CombinedState } from '@reduxjs/toolkit';

import postReducer, { PostStateType } from './postReducer';

import userReducer, { UserStateType } from './userReducer';
import groupReducer, { GroupStateType } from './groupReducer';

type ReducerState = {
  post: PostStateType;
  user: UserStateType;
  group: GroupStateType;
};

const rootReducer = (
  state: any,
  action: AnyAction,
): CombinedState<ReducerState> => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return combineReducers({
        post: postReducer,
        user: userReducer,
        group: groupReducer
      })(state, action);
  }
};

export default rootReducer;
