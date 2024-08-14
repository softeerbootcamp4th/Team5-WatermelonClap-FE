import { customFetch, getAccessToken } from "@watermelon-clap/core/src/utils";

export const apiDeleteOrderEvent = async (id: string): Promise<void> => {
  return customFetch(
    `${import.meta.env.VITE_BACK_BASE_URL}/admin/event/order/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    },
  ).catch((error) => {
    throw error;
  });
};
