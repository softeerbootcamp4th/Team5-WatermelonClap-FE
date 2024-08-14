import { IMyParts } from "@watermelon-clap/core/src/types";
import { getAccessToken, customFetch } from "@watermelon-clap/core/src/utils";

export const apiGetMyParts: () => Promise<IMyParts[]> = () => {
  const token = getAccessToken();
  return customFetch(`${import.meta.env.VITE_BACK_BASE_URL}/event/parts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
