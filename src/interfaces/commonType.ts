export type Imeta = {
  page: number;
  limit: number;
  total: number;
};

export type Iresponse = {
  data: any;
  meta?: Imeta;
};

export type IDepartment = {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
