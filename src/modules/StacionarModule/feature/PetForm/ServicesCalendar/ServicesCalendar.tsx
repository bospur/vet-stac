import {
  Alert,
  ArrowLeftOutlined,
  Badge,
  BadgeProps,
  Button,
  Calendar,
  CalendarProps,
  DATE_FORMAT,
  Flex,
} from "@/shared";
import dayjs, { Dayjs } from "dayjs";
import { useCallback, useState } from "react";
import isLeapYear from "dayjs/plugin/isLeapYear";
import "dayjs/locale/ru";
import { Services } from "../Services";
import { useLogic } from "./useLogic";

dayjs.extend(isLeapYear);
dayjs.locale("ru");

const getListData = (value: Dayjs) => {
  let listData: { type: string; content: string }[] = []; // Specify the type of listData
  switch (value.date()) {
    case 11:
      listData = [
        { type: "warning", content: "Поставить вакцину" },
        { type: "success", content: "Лечение выполнено" },
      ];
      break;
    case 12:
      listData = [
        { type: "warning", content: "Операция!!" },
        { type: "success", content: "Лечение выполнено" },
        { type: "error", content: "Нужно убрать лоток" },
      ];
      break;
    case 13:
      listData = [
        { type: "warning", content: "СНИМОК(Оксана)" },
        { type: "success", content: "Должен поехать домой" },
        { type: "error", content: "Не стал есть" },
        { type: "error", content: "Помер (шутка)" },
        { type: "error", content: "Уборка" },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

export const ServicesCalendar = () => {
  const {
    lightServices,
    filterValue,
    handleSetFilter,
    handleAddService,
    dayServices,
  } = useLogic();
  const [value, setValue] = useState(() => dayjs(new Date()));
  const [selectedValue, setSelectedValue] = useState<Dayjs | null>(null);
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul
        style={{
          padding: 0,
          paddingInlineStart: 0,
          listStyle: "none",
        }}
      >
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  const onSelect = (newValue: Dayjs) => {
    // setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  const handleReturnToCalendar = useCallback(() => {
    setSelectedValue(null);
  }, []);

  return (
    <Flex wrap>
      {selectedValue && (
        <>
          <Flex gap="middle" align="center">
            <Alert
              message={`Выбрана дата: ${selectedValue?.format(DATE_FORMAT)}`}
            />
            <Button
              icon={<ArrowLeftOutlined />}
              type="primary"
              onClick={handleReturnToCalendar}
            />
          </Flex>
          <Services
            lightServices={lightServices}
            filterValue={filterValue}
            handleSetFilter={handleSetFilter}
            handleAddService={handleAddService}
            dayServices={dayServices}
          />
        </>
      )}
      {!selectedValue && (
        <Calendar
          value={value}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
          cellRender={cellRender}
        />
      )}
    </Flex>
  );
};
