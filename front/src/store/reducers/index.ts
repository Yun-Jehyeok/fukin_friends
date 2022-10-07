import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "@reduxjs/toolkit";
import type { AnyAction, CombinedState } from "@reduxjs/toolkit";

import userReducer, { UserStateType } from "./userReducer";
import noticeReducer, { NoticeStateType } from "./noticeReducer";

interface ReducerState {
  user: UserStateType;
  notice: NoticeStateType;
}

const rootReducer = (
  state: any,
  action: AnyAction
): CombinedState<ReducerState> => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return combineReducers({
        user: userReducer,
        notice: noticeReducer,
      })(state, action);
  }
};

export default rootReducer;
