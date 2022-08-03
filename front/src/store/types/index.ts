// 응답 status 기본 타입
export type ResponseStatus = {
  status: {
    ok: boolean;
  };
};

// 응답 데이터 기본 타입
export type ResponseData = {
  msg: string;
};

// 예측 가능한 실패인 경우의 응답 타입
export type ResponseFailure = {
  status: { ok: boolean };
  data: { msg: string };
};

export type { LoadPostsBody, LoadPostsResponse } from './post';
