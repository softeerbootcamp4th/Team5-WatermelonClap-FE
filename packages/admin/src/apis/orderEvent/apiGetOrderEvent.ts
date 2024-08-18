import { IOrderEvent } from "@watermelon-clap/core/src/types";
import { customFetch } from "@watermelon-clap/core/src/utils";
import { getAccessToken } from "@watermelon-clap/core/src/utils";

export const apiGetOrderEvent = async (id?: string): Promise<IOrderEvent[]> => {
  const url = id
    ? `${import.meta.env.VITE_BACK_BASE_URL}/admin/event/order/${id}`
    : `${import.meta.env.VITE_BACK_BASE_URL}/admin/event/order`;

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
