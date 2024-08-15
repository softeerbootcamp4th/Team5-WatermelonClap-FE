import { customFetch } from "@watermelon-clap/core/src/utils";
import { getAccessToken } from "@watermelon-clap/core/src/utils";
import { IGetPartsEventResponse } from "./type";

export const apiGetPartsEventParticipant = async (
  page: number,
  size: number,
): Promise<IGetPartsEventResponse> => {
  const url = `${import.meta.env.VITE_BACK_BASE_URL}/admin/event/applier?page=${page}&size=${size}`;

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
