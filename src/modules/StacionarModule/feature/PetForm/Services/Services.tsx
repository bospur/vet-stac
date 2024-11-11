import { ChangeEvent } from "react";
import { DayServices, Dict, Service } from "../../../domain";
import { Button, Flex, Input } from "@/shared";

type Props = {
  dayServices: DayServices[];
  filterValue: string;
  handleSetFilter: (e: ChangeEvent<HTMLInputElement>) => void;
  lightServices: Dict["light"] | undefined;
  handleAddService: (el: Service) => void;
};

export const Services = ({
  dayServices,
  filterValue,
  handleSetFilter,
  lightServices,
  handleAddService,
}: Props) => {
  return (
    <Flex
      gap="middle"
      style={{ padding: "10px", width: "100%", overflow: "hidden" }}
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

          overflow: "hidden",
        }}
      >
        <Input
          value={filterValue}
          onChange={handleSetFilter}
          placeholder="Поиск по уколам"
        />
        <Flex
          gap="middle"
          wrap
          style={{
            overflowY: "auto",
            height: "100%",
            scrollbarWidth: "thin",
          }}
        >
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
  );
};
