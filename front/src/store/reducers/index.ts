import type { AnyAction, CombinedState } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import commentReducer, { CommentStateType } from "./commentReducer";
import feedReducer, { FeedStateType } from "./feedReducer";
import noticeReducer, { NoticeStateType } from "./noticeReducer";
import userReducer, { UserStateType } from "./userReducer";

interface ReducerState {
  user: UserStateType;
  notice: NoticeStateType;
  comment: CommentStateType;
  feed: FeedStateType;
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
        feed: feedReducer,
      })(state, action);
  }
};

export default rootReducer;
