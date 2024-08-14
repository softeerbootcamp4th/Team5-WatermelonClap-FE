import { customFetch } from "@watermelon-clap/core/src/utils";
import { getAccessToken } from "@watermelon-clap/core/src/utils";
import { Winner } from "./type";

export const apiGetOrderEventWinner = async (id: string): Promise<Winner[]> => {
  return customFetch(
    `${import.meta.env.VITE_BACK_BASE_URL}/admin/event/order/${id}/winner`,
    {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    },
  )
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};
