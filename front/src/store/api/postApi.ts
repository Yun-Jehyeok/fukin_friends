import { axiosInstance } from '.';
import type { LoadPostsBody, LoadPostsResponse } from '../types';

export const apiLoadPosts = ({ lastId, limit }: LoadPostsBody) =>
  axiosInstance.get<LoadPostsResponse>(
    `/posts?lastId=${lastId}&limit=${limit}`,
  );
