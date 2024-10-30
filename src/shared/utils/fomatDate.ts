import { DATE_FORMAT } from "../constants";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import "dayjs/locale/ru";

dayjs.extend(isLeapYear);
dayjs.locale("ru");

export const formatDate = (date: Date) => {
  return dayjs(date.toDateString()).format(DATE_FORMAT);
};
