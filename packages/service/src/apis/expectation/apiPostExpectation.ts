import { customFetch, getAccessToken } from "@watermelon-clap/core/src/utils";

export const apiPostExpectation = (expectation: string) =>
  customFetch(
    `
    ${import.meta.env.VITE_BACK_BASE_URL}/expectations
    `,
    {
      method: "POST",
      body: JSON.stringify({
        expectation: expectation,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
    },
  );
