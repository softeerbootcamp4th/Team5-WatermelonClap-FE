import { IMyParts } from "@watermelon-clap/core/src/types";
import { customFetch } from "@watermelon-clap/core/src/utils";

export const apiGetSharedParts = (link_key?: string): Promise<IMyParts[]> => {
  return customFetch(
    `${import.meta.env.VITE_BACK_BASE_URL}/event/parts/link/${link_key}`,
  ).then((res) => res.json());
};
