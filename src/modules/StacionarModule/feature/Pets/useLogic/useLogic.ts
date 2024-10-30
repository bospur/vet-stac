import { PetsColums } from "../../../domain";
import { Actions } from "../Actions";
import { Tags } from "../Tags";

export const useLogic = () => {
  const columns: PetsColums = [
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
      title: "Дата открытия",
      key: "startDate",
      dataIndex: "startDate",
    },
    {
      title: "Метки",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => Tags({ tags }),
    },
    {
      title: "Действия",
      key: "action",
      width: "5%",
      render: (_, record) => Actions({ record }),
    },
  ];

  return { columns };
};
