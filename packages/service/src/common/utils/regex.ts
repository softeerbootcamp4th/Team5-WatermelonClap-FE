export const isValidPhoneNumber = (phone: string) => {
  const phoneRegex = /^010-(\d{3,4})-(\d{4})$/;
  return phoneRegex.test(phone);
};
