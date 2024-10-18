export enum TodoStatus {
  Active = "Active",
  Completed = "Complited",
}

export type TodoItem = {
  id: string;
  label: string;
  status: TodoStatus;
};

export type TodoItemList = TodoItem[];
