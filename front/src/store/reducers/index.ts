import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from '@reduxjs/toolkit';
import type { AnyAction, CombinedState } from '@reduxjs/toolkit';

import postReducer, { PostStateType } from './postReducer';

import { postActions } from './postReducer';

type ReducerState = {
  post: PostStateType;
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
      })(state, action);
  }
};

export default rootReducer;
