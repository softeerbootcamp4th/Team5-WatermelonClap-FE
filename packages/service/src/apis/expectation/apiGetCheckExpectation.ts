import { customFetch } from "@watermelon-clap/core/src/utils";
import { IApiGetCheckExpectation } from "./type";

export const apiGetCheckExpectation = (): Promise<IApiGetCheckExpectation> => {
  return customFetch(`${import.meta.env.VITE_BACK_BASE_URL}/expectations/check`)
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
};
