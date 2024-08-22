export const apiGetLoginValid = () =>
  fetch(`${import.meta.env.VITE_BACK_BASE_URL}/event/lotteries/login`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    credentials: "include",
  });
