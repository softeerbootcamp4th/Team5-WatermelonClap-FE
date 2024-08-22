import { customFetch } from "@watermelon-clap/core/src/utils";
import { getAccessToken } from "@watermelon-clap/core/src/utils";
import { IWinner } from "./type";

export const apiGetPartsWinner = async (): Promise<IWinner[]> => {
  const url = `${import.meta.env.VITE_BACK_BASE_URL}/admin/event/parts`;

  return customFetch(url, {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};
