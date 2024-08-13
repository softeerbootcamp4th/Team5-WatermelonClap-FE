import { IPostOrderEventRequest, IPostOrderEventResponse } from "./type";
import { customFetch } from "@service/common/utils/customFetch";

const DEFAULT_DELAY = 2000;

export const apiPostOrderEvent = async ({
  answer,
  eventId,
  quizId,
}: IPostOrderEventRequest): Promise<IPostOrderEventResponse> => {
  await new Promise((resolve) => setTimeout(resolve, DEFAULT_DELAY));

  return customFetch(
    `${import.meta.env.VITE_BACK_BASE_URL}/event/order/${eventId}/${quizId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answer: answer }),
    },
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};
