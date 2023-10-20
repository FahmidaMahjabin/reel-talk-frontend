import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: (builder) => ({}),
  tagTypes: ["user"],
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
