import { customFetch, getAccessToken } from "@core/utils";

export const apiGetLoginValid = () =>
  customFetch(`${import.meta.env.VITE_BACK_BASE_URL}/event/lotteries/login`, {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
    credentials: "include",
  });
