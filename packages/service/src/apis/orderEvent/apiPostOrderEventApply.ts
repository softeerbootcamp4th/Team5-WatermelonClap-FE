import { IPostOrderEventApplyRequest } from "./type";

export const apiPostOrderEventApply = async ({
  eventId,
  quizId,
  phoneNumber,
  appplyTicket,
}: IPostOrderEventApplyRequest): Promise<Response> => {
  return fetch(
    `${import.meta.env.VITE_BACK_BASE_URL}/event/order/${eventId}/${quizId}/apply`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ApplyTicket: appplyTicket,
      },
      body: JSON.stringify({ phoneNumber: phoneNumber }),
    },
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
