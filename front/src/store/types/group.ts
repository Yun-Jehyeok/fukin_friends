export interface IGroup {
  id: string;
  title: string;
  member: string[];
}

// 전체 그룹 로딩
export type LoadGroupsReq = {
  userId: string;
};
export type LoadGroupsRes = {
    groups: IGroup[]
};
export type LoadGroupsFail = {
   msg: string
}

// 그룹 생성
export type CreateGroupReq = {
  group: {
    userId: string;
    title: string;
    member?: string[];
  };
};
export type CreateGroupRes = {
    id: string,
    title: string,
    member: string[]
};
export type CreateGroupFail = {
   msg: string
}

// 그룹 변경
export type ChangeGroupReq = {
  title: string | undefined;
};
export type ChangeGroupRes = {
  title: string | undefined,
};
export type ChangeGroupFail = {
   msg: string
}