import { IDepartment, Imeta } from "@/interfaces/commonType";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDepartments: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/management-departments",
        method: "GET",
        params: arg,
      }),
      // providesTags: [tagTypes.department],
      transformResponse: (response: IDepartment, meta: Imeta) => {
        return {
          departments: response,
          meta: meta,
        };
      },
    }),
    createDepartment: build.mutation({
      query: (data) => ({
        url: "/management-departments",
        method: "POST",
        data: data,
      }),
      //   invalidatesTags: ["department"],
    }),
  }),
});

export const { useGetAllDepartmentsQuery, useCreateDepartmentMutation } =
  departmentApi;
