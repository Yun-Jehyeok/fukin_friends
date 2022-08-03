import type { ResponseData, ResponseStatus } from '.';

export type LoadPostsBody = {
  lastId: number;
  limit: number;
};

export interface IPost {
  title: string;
  content: string;
  category: string[];
  creator: string;
  date: string;
  views: number;
}

export type LoadPostsResponse = ResponseStatus & {
  data: ResponseData & {
    limit: number;
    posts: IPost[];
  };
};
