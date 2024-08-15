import { customFetch, getAccessToken } from "@watermelon-clap/core/src/utils";

interface IApiGetMyShareLink {
  link: string;
}

export const apiGetMyShareLink = (): Promise<IApiGetMyShareLink> => {
  return customFetch(`${import.meta.env.VITE_BACK_BASE_URL}/link`, {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  }).then((res) => res.json());
};
