import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { UIStore } from "../UIStore";
import { TodoItem, TodoStatus } from "../../../domain";
import { ButtonProps, InputProps, v4 } from "@/shared";

type ButtonsVariantKey = "all" | "completed" | "active";
type ButtonsVariants = Record<ButtonsVariantKey, ButtonProps["variant"]>;

export const useLogic = (store: UIStore) => {
  const { todos, saveList } = store;
  const [currentTodos, setCurrentTodos] = useState(todos);
  const [todoFilter, setTodoFilter] = useState<TodoStatus | undefined>();
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const filteredTodos = useMemo(() => {
    if (!todoFilter) {
      return currentTodos;
    }

    return currentTodos.filter(({ status }) => status === todoFilter);
  }, [currentTodos, todoFilter]);

  const buttonsVariant = useMemo((): ButtonsVariants => {
    return {
      all: todoFilter === undefined ? "outlined" : undefined,
      active: todoFilter === TodoStatus.Active ? "outlined" : undefined,
      completed: todoFilter === TodoStatus.Completed ? "outlined" : undefined,
    };
  }, [todoFilter]);

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
              status:
                todo.status === TodoStatus.Active
                  ? TodoStatus.Completed
                  : TodoStatus.Active,
            };
          }
          return todo;
        })
      ),
    []
  );

  const handleAddButtonClick = useCallback(() => {
    if (inputValue.length) {
      setIsError(false);
      addTodo({
        status: TodoStatus.Active,
        id: v4(),
        label: inputValue,
      });
      setInputValue("");

      return;
    }

    return setIsError(true);
  }, [addTodo, inputValue]);

  const handleInputChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      if (isError) {
        setIsError(false);
      }

      setInputValue(target.value);
    },
    [isError]
  );

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
    inputStatus: (isError ? "error" : undefined) as InputProps["status"],
    inputPlaseHolder: isError ? "Поле не может пустым" : "Новая задача",
    isDisableButton: Boolean(!inputValue.length),
    buttonsVariant,
  };
};
