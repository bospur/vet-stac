import { Button, Table } from "@/shared";
import { DataType, FAKE_PETS_DATA } from "../../domain";
import { useLogic } from "./useLogic";

export const Pets = () => {
  const { columns } = useLogic();

  return (
    <>
      <Button
        type="primary"
        danger
        style={{
          borderRadius: "0",
          width: "100%",
        }}
        disabled
      >
        Открыть стационар
      </Button>
      <Table<DataType>
        columns={columns}
        dataSource={FAKE_PETS_DATA}
        pagination={{}}
      />
    </>
  );
};
