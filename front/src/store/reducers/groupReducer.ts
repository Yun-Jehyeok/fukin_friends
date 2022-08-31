import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type {
  ChangeGroupFail,
  ChangeGroupReq,
  ChangeGroupRes,
  CreateGroupReq,
  CreateGroupRes,
  LoadGroupsReq,
  LoadGroupsRes
} from '../types/group';
import { IGroup } from '../types/group';

export type GroupStateType = {
  groups: IGroup[];
  isLoading: boolean;
  currentGroup: string;
};

const initialState: GroupStateType = {
  groups: [],
  isLoading: false,
  currentGroup: ''
};

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    // 전체 그룹 로딩
    loadGroupsRequest(state, action: PayloadAction<LoadGroupsReq>) {
      state.isLoading = true;
    },
    loadGroupsSuccess(state, action: PayloadAction<LoadGroupsRes>) {      
      state.isLoading = false;
      state.groups = action.payload.groups;
      state.currentGroup = action.payload.groups[0].title;
    },
    loadGroupsFailure(state, action: PayloadAction<LoadGroupsRes>) {
      state.isLoading = false;
      state.groups = [];
    },

    // 그룹 생성
    createGroupRequest(state, action: PayloadAction<CreateGroupReq>) {
      state.isLoading = true;
    },
    createGroupSuccess(state, action: PayloadAction<CreateGroupRes>) {
      window.location.href = "/";

      state.isLoading = false;
      state.groups = [...state.groups, action.payload];
      state.currentGroup = action.payload.title;
    },
    createGroupFailure(state, action: PayloadAction<CreateGroupRes>) {
      state.isLoading = false;
    },

    // 그룹 변경
    changeGroupRequest(state, action: PayloadAction<ChangeGroupReq>) {
      state.isLoading = true;
    },
    changeGroupSuccess(state, action: PayloadAction<ChangeGroupRes>) {
      state.isLoading = false;
      state.currentGroup = action.payload.title || "";
    },
    changeGroupFailure(state, action: PayloadAction<ChangeGroupFail>) {
      state.isLoading = false;
    }
  },
});

export const groupActions = groupSlice.actions;
export default groupSlice.reducer;
