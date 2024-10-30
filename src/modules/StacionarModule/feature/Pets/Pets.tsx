// TODO Вынести тестовые данные в domain
import {
  APP_ROUTES,
  Button,
  EyeOutlined,
  formatDate,
  Space,
  Table,
  TableProps,
  Tag,
  useRouter,
} from "@/shared";

enum TagType {
  Infection = "Инфекция",
  Leukemia = "Лейкемия",
  Mkb = "МКБ",
  Orthopedics = "Ортопедия",
  Hospital = "Стационар",
}

interface DataType {
  key: string;
  name: string;
  age: number;
  tags: TagType[];
  curator: string;
  startDate: string;
}

const TAG_COLOR_DICT = {
  [TagType.Infection]: "red",
  [TagType.Leukemia]: "pink",
  [TagType.Hospital]: "green",
  [TagType.Mkb]: "gold",
  [TagType.Orthopedics]: "yellow",
};

export const Pets = () => {
  const router = useRouter();

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Кличка",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Взраст",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Куратор",
      dataIndex: "curator",
      key: "curator",
    },
    {
      title: "Метки",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            const color = TAG_COLOR_DICT[tag];

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Дата открытия",
      key: "startDate",
      dataIndex: "startDate",
    },
    {
      title: "Действия",
      key: "action",
      width: "5%",
      render: (_, record) => (
        <Space size="middle">
          <Button
            icon={<EyeOutlined />}
            iconPosition="start"
            type="primary"
            onClick={() =>
              router.push(APP_ROUTES.petInfo.getRoutePath(record.key))
            }
          >
            Просмотр
          </Button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "Барсик",
      age: 5,
      tags: [TagType.Mkb, TagType.Hospital],
      curator: "Куракина Людмила",
      startDate: formatDate(new Date()),
    },
    {
      key: "2",
      name: "Пушок",
      age: 2,
      tags: [TagType.Infection, TagType.Leukemia],
      curator: "Анастасия Водолага",
      startDate: formatDate(new Date()),
    },
    {
      key: "3",
      name: "Бегемот",
      age: 3,
      tags: [TagType.Hospital, TagType.Orthopedics],
      curator: "Приют для кошек",
      startDate: formatDate(new Date()),
    },
  ];

  return <Table<DataType> columns={columns} dataSource={data} />;
};
