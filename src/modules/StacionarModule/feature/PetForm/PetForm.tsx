import { Form } from "@/shared";
import { MainInfo } from "./MainInfo";
import { useLogic } from "./useLogic";

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 16 },
};

export const PetForm = () => {
  const { mainInfoData } = useLogic();

  return (
    <Form
      {...layout}
      name="petForm"
      style={{ width: "100%" }}
      // initialValues={{ ...mainInfoData }}
      autoComplete="off"
      fields={mainInfoData}
      layout="horizontal"
      requiredMark="optional"
    >
      <MainInfo />
    </Form>
  );
};
