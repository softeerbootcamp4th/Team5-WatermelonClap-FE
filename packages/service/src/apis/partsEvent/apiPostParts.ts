import { IParts } from "./type";

export const apiPostParts = (): Promise<IParts> =>
  fetch(
    `
    ${import.meta.env.VITE_BACK_BASE_URL}/event/parts
    `,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    },
  )
    .then((response) => response.json())
    .then((data) => data);
