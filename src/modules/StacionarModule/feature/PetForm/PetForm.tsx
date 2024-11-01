import { Button, Flex, Form, Input } from "@/shared";
import { MainInfo } from "./MainInfo";
import { useLogic } from "./useLogic";

// const layout = {
//   labelCol: { span: 3 },
//   wrapperCol: { span: 16 },
// };

export const PetForm = () => {
  const {
    mainInfoData,
    lightServices,
    filterValue,
    setFilterValue,
    handleAddService,
    dayServices,
  } = useLogic();

  return (
    <Form
      // {...layout}
      name="petForm"
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
      autoComplete="off"
      fields={mainInfoData}
      layout="vertical"
      requiredMark="optional"
    >
      <MainInfo />
      <Flex
        gap="middle"
        style={{ padding: "10px", width: "100%", height: "100%" }}
      >
        <Flex style={{ padding: "10px", width: "60%" }} vertical>
          {dayServices &&
            dayServices.map((service) => {
              return (
                <div key={service.id}>
                  {service.id} - {service.name} - {service.count} -{" "}
                  {service.count * service.price}
                </div>
              );
            })}
          {!dayServices.length && <p>Добавте Элемент для начала</p>}
          {!!dayServices.length && (
            <p>
              Общая стоимость:{" "}
              {dayServices.reduce((acc, el) => {
                return (acc = acc + el.count * el.price);
              }, 0)}
            </p>
          )}
        </Flex>
        <Flex
          gap="middle"
          vertical
          style={{
            padding: "10px",
            width: "40%",
          }}
        >
          <Input
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            placeholder="Поиск по уколам"
          />
          <Flex gap="middle" wrap>
            {lightServices &&
              lightServices.map((el) => {
                return (
                  <Button
                    key={el.id}
                    type="primary"
                    onClick={() => handleAddService(el)}
                  >
                    {el.name}
                  </Button>
                );
              })}
          </Flex>
        </Flex>
      </Flex>
    </Form>
  );
};
