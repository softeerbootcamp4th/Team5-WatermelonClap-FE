import { customFetch } from "@watermelon-clap/core/src/utils";
import { IExpectation } from "./type";

export const apiGetExpectation = (): Promise<IExpectation[]> => {
  return customFetch(`${import.meta.env.VITE_BACK_BASE_URL}/expectations`)
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
};
