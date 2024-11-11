import { Form, Tabs, TabsProps } from "@/shared";
import { MainInfo } from "./MainInfo";
import { useLogic } from "./useLogic";

import { ServicesCalendar } from "./ServicesCalendar";

export const PetForm = () => {
  const { mainInfoData } = useLogic();

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Основная Информация",
      children: <MainInfo />,
    },
    {
      key: "2",
      label: "Календарь",
      children: <ServicesCalendar />,
    },
    {
      key: "3",
      label: "Анамнез",
      children: "Анамнез",
    },
    {
      key: "4",
      label: "Операции",
      children: "Информация об операциях",
    },
  ];

  return (
    <Form
      name="petForm"
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
      }}
      autoComplete="off"
      fields={mainInfoData}
      layout="vertical"
      requiredMark="optional"
    >
      <Tabs items={items} defaultActiveKey="1" />
    </Form>
  );
};
