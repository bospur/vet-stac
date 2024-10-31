import { Button, Flex, Form, Input } from "@/shared";
import { MainInfo } from "./MainInfo";
import { useLogic } from "./useLogic";

// const layout = {
//   labelCol: { span: 3 },
//   wrapperCol: { span: 16 },
// };

export const PetForm = () => {
  const { mainInfoData, lightServices, filterValue, setFilterValue } =
    useLogic();

  return (
    <Form
      // {...layout}
      name="petForm"
      style={{ width: "100%" }}
      autoComplete="off"
      fields={mainInfoData}
      layout="vertical"
      requiredMark="optional"
    >
      <MainInfo />
      <Flex style={{ padding: "10px" }}>
        <Input
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          placeholder="Поиск по уколам"
        />
      </Flex>
      <Flex gap="middle" wrap style={{ padding: "10px" }}>
        {lightServices &&
          lightServices.map((el) => {
            return (
              <Button key={el.id} type="primary">
                {el.name}
              </Button>
            );
          })}
      </Flex>
    </Form>
  );
};
