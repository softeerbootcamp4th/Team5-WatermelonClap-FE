import { customFetch } from "@watermelon-clap/core/src/utils";
import { getAccessToken } from "@watermelon-clap/core/src/utils";

export const apiGetAdminAuth = async (): Promise<void> => {
  const url = `${import.meta.env.VITE_BACK_BASE_URL}/admin/check`;

  return customFetch(url, {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  }).catch((error) => {
    throw error;
  });
};
