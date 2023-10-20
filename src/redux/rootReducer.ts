import { authApi } from "./api/authApi";
import { baseApi } from "./api/baseApi";
import { departmentApi } from "./api/departmentApi";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [departmentApi.reducerPath]: departmentApi.reducer,
};
