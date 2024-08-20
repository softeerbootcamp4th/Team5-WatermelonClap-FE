import { customFetch } from "@watermelon-clap/core/src/utils";
import { getAccessToken } from "@watermelon-clap/core/src/utils";

export const apiPostExpectation = async (id: string): Promise<Response> => {
  const url = `${import.meta.env.VITE_BACK_BASE_URL}/admin/expectations/${id}/toggle`;
  return customFetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};
