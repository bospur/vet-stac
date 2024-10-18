import { TodoItemList, TodoStatus } from "../types";

export const todosFakeData: TodoItemList = [
  {
    id: "1",
    label: "Написать код",
    status: TodoStatus.Completed,
  },
  {
    id: "2",
    label: "Покрыть тестами",
    status: TodoStatus.Active,
  },
  {
    id: "3",
    label: "Пройти собеседование",
    status: TodoStatus.Active,
  },
];
