import { customFetch, getAccessToken } from "@watermelon-clap/core/src/utils";

interface IApiGetLotteryStatus {
  rank: number;
  miniature: boolean;
  applied: boolean;
}

export const apiGetLotteryStatus = (): Promise<IApiGetLotteryStatus> =>
  customFetch(`${import.meta.env.VITE_BACK_BASE_URL}/event/lotteries/rank`, {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  }).then((res) => {
    return res.json();
  });
