import { type TodoItemList } from "../../domain";
import { Item } from "./Item";
import styles from "./styles.module.scss";

type Props = {
  data: TodoItemList;
  onRemoveTodo: (id: string) => void;
  onChageStatus: (id: string) => void;
};

export const TodoList = ({ data, onRemoveTodo, onChageStatus }: Props) => {
  if (!data.length) {
    return <p className={styles.noData}>Добавьте задачу</p>;
  }

  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <Item
          key={item.id}
          data={item}
          onRemoveTodo={onRemoveTodo}
          onChageStatus={onChageStatus}
        />
      ))}
    </ul>
  );
};
