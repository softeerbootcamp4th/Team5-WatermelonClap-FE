import { customFetch } from "@service/common/utils/customFetch";
import { IMyParts } from "./type";
import { getAccessToken } from "@service/common/utils";

export const apiGetMyParts: () => Promise<IMyParts[]> = () => {
  const token = getAccessToken();
  return customFetch(`${import.meta.env.VITE_BACK_BASE_URL}/event/parts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
