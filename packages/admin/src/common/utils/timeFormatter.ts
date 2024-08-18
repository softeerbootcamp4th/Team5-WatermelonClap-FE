import dayjs from "dayjs";

export const formatDateTime = (
  date: dayjs.Dayjs | null,
  time: dayjs.Dayjs | null,
): string => {
  if (!date || !time) {
    return "";
  }

  return dayjs(date)
    .set("hour", time.hour())
    .set("minute", time.minute())
    .set("second", time.second())
    .format("YYYY-MM-DDTHH:mm:ss");
};
