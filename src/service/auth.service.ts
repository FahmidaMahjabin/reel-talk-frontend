import jwtDecode from "jwt-decode";
import { getFromLocalStorage } from "./service.store";
export const getUserInfo = () => {
  const token = getFromLocalStorage("accessToken");
  console.log("token", token);

  if (token) {
    const decodedToken = jwtDecode(token as string);
    console.log("decoded-token:", decodedToken);
    if (decodedToken) {
      return decodedToken;
    }
  }
  return "";
};

export const isLoggedIn = () => {
  const user = getUserInfo();
  if (user) return true;
  else return false;
};

export const removeUserFromStore = () => {
  localStorage.removeItem("accessToken");
};
