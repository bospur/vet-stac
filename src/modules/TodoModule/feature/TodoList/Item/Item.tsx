import { Button, Checkbox, DeleteOutlined } from "@/shared";
import { TodoItem, TodoStatus } from "../../../domain";
import styles from "./styles.module.scss";

type Props = {
  data: TodoItem;
  onRemoveTodo: (id: string) => void;
  onChageStatus: (id: string) => void;
};

export const Item = ({ data, onRemoveTodo, onChageStatus }: Props) => {
  return (
    <li className={styles.item}>
      <Checkbox
        checked={data.status === TodoStatus.Completed}
        onChange={() => onChageStatus(data.id)}
      />
      <div>{data.label}</div>
      <Button
        type="primary"
        danger
        onClick={() => onRemoveTodo(data.id)}
        icon={<DeleteOutlined />}
        iconPosition="end"
      />
    </li>
  );
};
