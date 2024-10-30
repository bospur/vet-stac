import { TableProps } from "@/shared";
import { TagType } from "../enums";

export interface DataType {
  key: string;
  name: string;
  age: number;
  tags: TagType[];
  curator: string;
  startDate: string;
  id: string;
}

export type PetsColums = TableProps<DataType>["columns"];
