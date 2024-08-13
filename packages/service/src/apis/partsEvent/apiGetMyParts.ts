import { IMyParts } from "./type";

export const apiGetMyParts: (token: string) => Promise<IMyParts[]> = (
  token,
) => {
  return fetch(`${import.meta.env.VITE_BACK_BASE_URL}/event/parts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
