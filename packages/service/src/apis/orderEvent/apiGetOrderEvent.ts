import { IOrderEvent } from "./type";

export const apiGetOrderEvent = async (id?: string): Promise<IOrderEvent[]> => {
  const url = id
    ? `${import.meta.env.VITE_BACK_BASE_URL}/event/order/${id}`
    : `${import.meta.env.VITE_BACK_BASE_URL}/event/order`;

  const res = await fetch(url);
  const data: IOrderEvent[] = await res.json();
  return data;
};
