import { customFetch } from "@watermelon-clap/core/src/utils";
import { getAccessToken } from "@watermelon-clap/core/src/utils";

export const apiPostLotteriesCheckStatus = async (
  id: string,
): Promise<Response> => {
  const url = `${import.meta.env.VITE_BACK_BASE_URL}/admin/event/lotteries/${id}/done`;
  return customFetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  })
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};
