import { customFetch, getAccessToken } from "@watermelon-clap/core/src/utils";

export const apiGetPartsRemain = () =>
  customFetch(`${import.meta.env.VITE_BACK_BASE_URL}/event/parts/remain`, {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  }).then((res) => res.json());
