import { TodoItemList, todosFakeData } from "../../../domain";
import { makeAutoObservable } from "mobx";

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
}

export const createUIStore = () => new UIStore();
