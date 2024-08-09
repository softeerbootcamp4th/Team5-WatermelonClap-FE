export const apiGetPartsRemain = () =>
  fetch(`${import.meta.env.VITE_BACK_BASE_URL}/event/parts/remain`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
