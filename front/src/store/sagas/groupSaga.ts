import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import type { AxiosResponse } from 'axios';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {
  ChangeGroupReq,
  ChangeGroupRes,
  CreateGroupReq,
  CreateGroupRes,
  LoadGroupsReq,
  LoadGroupsRes
} from '../types/group';

import {
  createGroup, loadGroups
} from '../api/groupApi';
import { groupActions } from '../reducers/groupReducer';

// 전체 그룹 로딩
function* loadGroupsApi(action: PayloadAction<LoadGroupsReq>) {
  try {
    const { data }: AxiosResponse<LoadGroupsRes> = yield call(
        loadGroups,
        action.payload,
    );

    yield put(groupActions.loadGroupsSuccess(data));
  } catch (e: any) {
    yield put(
      groupActions.loadGroupsFailure(e.response.data.msg),
    );
  }
}

function* watchLoadGroups() {
  yield takeLatest(groupActions.loadGroupsRequest, loadGroupsApi);
}

// 그룹 생성
function* createGroupApi(action: PayloadAction<CreateGroupReq>) {
  try {
    const { data }: AxiosResponse<CreateGroupRes> = yield call(
        createGroup,
        action.payload,
    );

    yield put(groupActions.createGroupSuccess(data));
  } catch (e: any) {
    yield put(
      groupActions.createGroupFailure(e.response.data.msg),
    );
  }
}

function* watchCreateGroup() {
  yield takeLatest(groupActions.createGroupRequest, createGroupApi);
}

// 그룹 변경
function* changeGroupApi(action: PayloadAction<ChangeGroupReq>) {
  try {
    // const { data }: AxiosResponse<ChangeGroupRes> = yield call(
    //     changeGroup,
    //     action.payload,
    // );

    const data = action.payload;
    
    yield put(groupActions.changeGroupSuccess(data));
  } catch (e: any) {
    yield put(
      groupActions.changeGroupFailure(e.response.data.msg),
    );
  }
}

function* watchChangeGroup() {
  yield takeLatest(groupActions.changeGroupRequest, changeGroupApi);
}

export default function* groupSaga() {
  yield all([
    fork(watchLoadGroups),
    fork(watchCreateGroup),
    fork(watchChangeGroup)
  ]);
}
