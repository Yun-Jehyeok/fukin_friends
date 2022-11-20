import type { AnyAction, CombinedState } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import commentReducer, { CommentStateType } from "./commentReducer";
import noticeReducer, { NoticeStateType } from "./noticeReducer";
import userReducer, { UserStateType } from "./userReducer";

interface ReducerState {
  user: UserStateType;
  notice: NoticeStateType;
  comment: CommentStateType;
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
        comment: commentReducer,
      })(state, action);
  }
};

export default rootReducer;
