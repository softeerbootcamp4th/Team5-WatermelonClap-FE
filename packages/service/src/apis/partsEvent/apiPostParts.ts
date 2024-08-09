export const apiPostParts = fetch(`
    ${import.meta.env.VITE_BACK_BASE_URL}/event/parts,
    `)
  .then((response) => response.json())
  .then((data) => console.log(data));
