import { customFetch, getAccessToken } from "@watermelon-clap/core/src/utils";
import { IAdminPostPartsEventRequest } from "./type";

export const apiPostPartsEvent = async ({
  name,
  startTime,
  endTime,
  rewards,
}: IAdminPostPartsEventRequest): Promise<Response> => {
  const formdata = new FormData();

  // rank와 name 속성만 추출
  const processedRewards = rewards.map((reward) => ({
    rank: reward.rewardRank,
    winnerCount: reward.winnerCount,
    name: reward.rewardName,
  }));

  const eventData = {
    name: name,
    startTime: startTime,
    endTime: endTime,
    rewards: processedRewards,
  };

  formdata.append(
    "event",
    new Blob([JSON.stringify(eventData)], {
      type: "application/json",
    }),
  );

  rewards.map((reward) => {
    formdata.append("files", reward.rewardFile as File);
  });

  return customFetch(
    `${import.meta.env.VITE_BACK_BASE_URL}/admin/event/lotteries/create`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: formdata,
    },
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
