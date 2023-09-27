import { setToLocalStorage } from "@/app/utils/local-sororage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage("accessToken", accessToken);
};
