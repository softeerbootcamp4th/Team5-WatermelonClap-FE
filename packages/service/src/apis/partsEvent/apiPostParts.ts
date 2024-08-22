import { IParts } from "@watermelon-clap/core/src/types";
import { getAccessToken } from "@watermelon-clap/core/src/utils";

export const apiPostParts = (): Promise<IParts> =>
  fetch(
    `
    ${import.meta.env.VITE_BACK_BASE_URL}/event/parts
    `,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    },
  ).then((response) => response.json());
