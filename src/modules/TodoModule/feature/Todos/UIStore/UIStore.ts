import { ButtonProps } from "@/shared";
import { TodoItemList, todosFakeData, TodoStatus } from "../../../domain";
import { makeAutoObservable } from "mobx";

type ButtonsVariantKey = "all" | "completed" | "active";
type ButtonsVariants = Record<ButtonsVariantKey, ButtonProps["variant"]>;

export class UIStore {
  private storageKey = "todos";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private getLocalStorageTodos = () => {
    if (typeof window !== "undefined") {
      return window?.localStorage.getItem(this.storageKey);
    }
  };

  private setLocalStorage = (value: TodoItemList) => {
    window.localStorage.setItem(this.storageKey, JSON.stringify(value));
  };

  public get todos() {
    const storageTodos = this.getLocalStorageTodos();
    if (storageTodos) {
      return JSON.parse(storageTodos) as TodoItemList;
    }

    return todosFakeData;
  }

  public saveList = (value: TodoItemList) => this.setLocalStorage(value);

  /**Добавляет кнопке выбраного фильтра border */
  public getFilterButtonsVariant = (filter?: TodoStatus): ButtonsVariants => {
    return {
      all: filter === undefined ? "outlined" : undefined,
      active: filter === TodoStatus.Active ? "outlined" : undefined,
      completed: filter === TodoStatus.Completed ? "outlined" : undefined,
    };
  };

  public changeStatus = (currentStatus: TodoStatus) =>
    currentStatus === TodoStatus.Active
      ? TodoStatus.Completed
      : TodoStatus.Active;
}

export const createUIStore = () => new UIStore();
