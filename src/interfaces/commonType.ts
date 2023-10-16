export type Imeta = {
  page: number;
  limit: number;
  total: number;
};

export type Iresponse = {
  data: any;
  meta?: Imeta;
};
