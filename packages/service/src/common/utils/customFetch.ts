export const customFetch = async (
  url: string,
  options?: RequestInit,
): Promise<any> => {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return response;
  });
};
