// TODO: Подумать над оптимизацией сохранения в storage
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { UIStore } from "../UIStore";
import { TodoItem, TodoStatus } from "../../../domain";
import { v4 } from "@/shared";

export const useLogic = (store: UIStore) => {
  const { todos, saveList, getFilterButtonsVariant, changeStatus } = store;
  const [currentTodos, setCurrentTodos] = useState(todos);
  const [todoFilter, setTodoFilter] = useState<TodoStatus | undefined>();
  const [inputValue, setInputValue] = useState("");

  const filteredTodos = useMemo(() => {
    if (!todoFilter) {
      return currentTodos;
    }

    return currentTodos.filter(({ status }) => status === todoFilter);
  }, [currentTodos, todoFilter]);

  const filterButtonsVariant = useMemo(
    () => getFilterButtonsVariant(todoFilter),
    [getFilterButtonsVariant, todoFilter]
  );

  const addTodo = useCallback((todo: TodoItem) => {
    setCurrentTodos((prev) => [...prev, todo]);
  }, []);

  const removeTodo = useCallback(
    (id: string) =>
      setCurrentTodos((prev) => prev.filter((todo) => todo.id !== id)),
    []
  );

  const changeTodoStatus = useCallback(
    (id: string) =>
      setCurrentTodos((prev) =>
        prev.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              status: changeStatus(todo.status),
            };
          }
          return todo;
        })
      ),
    [changeStatus]
  );

  const handleAddButtonClick = () => {
    addTodo({
      status: TodoStatus.Active,
      id: v4(),
      label: inputValue,
    });
    setInputValue("");
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setInputValue(target.value);

  useEffect(() => {
    saveList(currentTodos);
  }, [currentTodos, saveList]);

  return {
    data: filteredTodos,
    addTodo,
    removeTodo,
    changeTodoStatus,
    setTodoFilter,
    handleInputChange,
    inputValue,
    handleAddButtonClick,
    isDisableButton: Boolean(!inputValue.length),
    filterButtonsVariant,
  };
};
