import { customFetch } from "@watermelon-clap/core/src/utils";

interface IApiGetLotteryStatus {
  rank: number;
  miniature: boolean;
  applied: boolean;
}

export const apiGetLotteryStatus = (): Promise<IApiGetLotteryStatus> => {
  return customFetch(
    `${import.meta.env.VITE_BACK_BASE_URL}/event/lotteries/rank`,
  ).then((res) => res.json());
};
