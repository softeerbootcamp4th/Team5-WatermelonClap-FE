import { customFetch } from "@watermelon-clap/core/src/utils";

export const apiPatchMyParts = (token: string, partsId: number) => {
  return customFetch(
    `${import.meta.env.VITE_BACK_BASE_URL}/event/parts/${partsId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  ).then(() => console.log(partsId));
};
