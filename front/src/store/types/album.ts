export interface IAlbum {
  _id: string;
  date: string;
  creator: string;
  imgs: string;
}

export interface GetAllAlbumsReq {
  skip: number;
}
export interface GetAllAlbumsRes {
  success: boolean;
  allAlbumsCnt: number;
  albums: IAlbum[];
}

export interface CreateAlbumReq {
  imgs: FormData;
}
export interface CreateAlbumRes {
  success: boolean;
  url: IAlbum[];
}

export interface DeleteAlbumReq {
  id: string;
  userId: string;
}
