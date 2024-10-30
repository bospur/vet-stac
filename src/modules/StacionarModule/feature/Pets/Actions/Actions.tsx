import { DataType } from "../../../domain";
import { APP_ROUTES, Button, EyeOutlined, Space, useRouter } from "@/shared";

type Props = {
  record: DataType;
};

export const Actions = ({ record }: Props) => {
  const router = useRouter();

  return (
    <Space size="middle">
      <Button
        icon={<EyeOutlined />}
        iconPosition="start"
        type="primary"
        onClick={() => router.push(APP_ROUTES.petInfo.getRoutePath(record.key))}
      >
        Просмотр
      </Button>
    </Space>
  );
};
