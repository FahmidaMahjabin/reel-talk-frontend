export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  console.log("accessToken from service.store:", accessToken);
  if (!accessToken || typeof window === "undefined") return "";
  return localStorage.setItem("accessToken", accessToken);
};
export const setToLoaclStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") return "";
  return localStorage.setItem(key, token);
};
export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  } else {
    return localStorage.getItem(key);
  }
};
