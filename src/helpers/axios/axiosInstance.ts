import { Iresponse } from "@/interfaces/commonType";
import { getFromLocalStorage } from "@/service/service.store";
import axios, { AxiosResponse } from "axios";
const axiosInstance = axios.create();
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;
// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // get accessToken
    // set accessToken to header authorization then return
    const accessToken = getFromLocalStorage("accessToken");
    console.log("accessToken from axiosInstance:", accessToken);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  // @ts-ignore
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const result: Iresponse = {
      data: response.data.data,
      meta: response.data.meta,
    };
    return result;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
