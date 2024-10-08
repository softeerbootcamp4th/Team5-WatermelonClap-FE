import { IOrderEvent } from "@watermelon-clap/core/src/types";
import { IAdminPostOrderEventRequest } from "./type";
import { customFetch, getAccessToken } from "@watermelon-clap/core/src/utils";

export const apiPostOrderEvent = async ({
  orderEvent,
  rewardImage,
  quizImage,
}: IAdminPostOrderEventRequest): Promise<IOrderEvent> => {
  const formdata = new FormData();

  formdata.append(
    "orderEvent",
    new Blob([JSON.stringify(orderEvent)], {
      type: "application/json",
    }),
  );

  formdata.append("rewardImage", rewardImage);
  formdata.append("quizImage", quizImage);

  return customFetch(
    `${import.meta.env.VITE_BACK_BASE_URL}/admin/event/order`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: formdata,
    },
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};
