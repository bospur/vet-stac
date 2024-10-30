import { Space, Table, TableProps, Tag } from "@/shared";

interface DataType {
  key: string;
  name: string;
  age: number;
  tags: string[];
  curator: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = "green";

          if (tag === "Инфекция") {
            color = "red";
          }

          if (tag === "Лейкемия") {
            color = "pink";
          }

          if (tag === "МКБ") {
            color = "gold";
          }

          if (tag === "Перелом") {
            color = "yellow";
          }

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
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "Барсик",
    age: 5,
    tags: ["МКБ", "Стационар"],
    curator: "Куракина Людмила",
  },
  {
    key: "2",
    name: "Пушок",
    age: 42,

    tags: ["Инфекция", "Лейкемия"],
    curator: "Анастасия Водолага",
  },
  {
    key: "3",
    name: "Бегемот",
    age: 32,
    tags: ["Стационар", "Перелом"],
    curator: "Приют для кошек",
  },
];

export const Pets = () => {
  return <Table<DataType> columns={columns} dataSource={data} />;
};
