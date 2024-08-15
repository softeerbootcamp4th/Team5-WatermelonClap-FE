import { customFetch } from "@watermelon-clap/core/src/utils";
import { getAccessToken } from "@watermelon-clap/core/src/utils";
import { IExpectation } from "./type";

export const apiGetExpectation = async (): Promise<IExpectation[]> => {
  const url = `${import.meta.env.VITE_BACK_BASE_URL}/admin/expectations`;

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
