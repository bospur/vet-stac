import { observer } from "mobx-react-lite";
import { TodoList } from "../TodoList";
import { useState } from "react";
import { createUIStore } from "./UIStore";
import { useLogic } from "./useLogic";
import { Button, Flex, Input } from "@/shared";
import { TodoStatus } from "../../domain";

export const Todos = observer(() => {
  const [store] = useState(createUIStore);
  const {
    data,
    setTodoFilter,
    inputValue,
    handleInputChange,
    handleAddButtonClick,
    inputStatus,
    inputPlaseHolder,
    isDisableButton,
    buttonsVariant,
    removeTodo,
    changeTodoStatus,
  } = useLogic(store);
  return (
    <Flex vertical gap="middle">
      <Flex gap="middle">
        <Input
          placeholder={inputPlaseHolder}
          maxLength={30}
          value={inputValue}
          onChange={handleInputChange}
          allowClear
          status={inputStatus}
        />
        <Button
          type="primary"
          onClick={handleAddButtonClick}
          disabled={isDisableButton}
        >
          Добавить
        </Button>
      </Flex>
      <Flex gap="small">
        <Button
          type="text"
          onClick={() => setTodoFilter(undefined)}
          variant={buttonsVariant.all}
          color="primary"
          size="small"
        >
          Все
        </Button>
        <Button
          type="text"
          variant={buttonsVariant.completed}
          onClick={() => setTodoFilter(TodoStatus.Completed)}
          color="primary"
          size="small"
        >
          Выполненные
        </Button>
        <Button
          type="text"
          variant={buttonsVariant.active}
          onClick={() => setTodoFilter(TodoStatus.Active)}
          color="primary"
          size="small"
        >
          Активные
        </Button>
      </Flex>
      <TodoList
        data={data}
        onRemoveTodo={removeTodo}
        onChageStatus={changeTodoStatus}
      />
    </Flex>
  );
});
