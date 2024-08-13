import { IOrderEvent } from "./type";
import { customFetch } from "@service/common/utils/customFetch";

export const apiGetOrderEvent = async (id?: string): Promise<IOrderEvent[]> => {
  const url = id
    ? `${import.meta.env.VITE_BACK_BASE_URL}/event/order/${id}`
    : `${import.meta.env.VITE_BACK_BASE_URL}/event/order`;

  return customFetch(url)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};
