import { formatDate } from "@/shared";
import { DataType, TagType } from "../types";

export const TAG_COLOR_DICT = {
  [TagType.Infection]: "red",
  [TagType.Leukemia]: "pink",
  [TagType.Hospital]: "green",
  [TagType.Mkb]: "gold",
  [TagType.Orthopedics]: "yellow",
};

export const FAKE_PETS_DATA: DataType[] = [
  {
    key: "1",
    name: "Барсик",
    age: 5,
    tags: [TagType.Mkb, TagType.Hospital],
    curator: "Куракина Людмила",
    startDate: formatDate(new Date()),
    id: "1",
  },
  {
    key: "2",
    name: "Пушок",
    age: 2,
    tags: [TagType.Infection, TagType.Leukemia],
    curator: "Анастасия Водолага",
    startDate: formatDate(new Date()),
    id: "2",
  },
  {
    key: "3",
    name: "Бегемот",
    age: 3,
    tags: [TagType.Hospital, TagType.Orthopedics],
    curator: "Приют для кошек",
    startDate: formatDate(new Date()),
    id: "3",
  },
];
