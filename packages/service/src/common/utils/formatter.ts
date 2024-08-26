export function toPx(value: number | string): string {
  return typeof value === "number" ? `${value}px` : value;
}

export function toS(value: number | string): string {
  return typeof value === "number" ? `${value}s` : value;
}

export const phoneNumberAutoFormat = (phoneNumber: string): string => {
  const number = phoneNumber.trim().replace(/[^0-9]/g, "");

  if (number.length < 4) return number;
  if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, "$1-$2");
  if (number.length < 11)
    return number.replace(/(\d{3})(\d{3})(\d{1})/, "$1-$2-$3");
  return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
};

export const formatEventDate = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startYear = start.getFullYear();
  const startMonth = String(start.getMonth() + 1).padStart(2, "0");
  const startDay = String(start.getDate()).padStart(2, "0");

  const endMonth = String(end.getMonth() + 1).padStart(2, "0");
  const endDay = String(end.getDate()).padStart(2, "0");

  return `${startYear}. ${startMonth}. ${startDay} ~ ${endMonth}. ${endDay}`;
};
