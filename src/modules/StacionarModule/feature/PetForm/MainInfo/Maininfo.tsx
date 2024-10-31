import { Flex, Form, Input } from "@/shared";
import { PetForm } from "../../../domain";

const { TextArea } = Input;

export const MainInfo = () => {
  return (
    <Flex gap="middle" wrap style={{ padding: "10px" }}>
      <Form.Item<PetForm.MainPetInfo>
        label="Кличка"
        name="name"
        rules={[{ required: true, message: "Кличка не может быть пустой" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<PetForm.MainPetInfo>
        label="Возраст"
        name="age"
        rules={[{ required: true, message: "Возраст не может быть пустой" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<PetForm.MainPetInfo>
        label="Вес при поступлении"
        name="weightStart"
        rules={[{ required: true, message: "Вес не может быть пустой" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<PetForm.MainPetInfo>
        label="Вес при выписке"
        name="weightEnd"
        rules={[{ required: true, message: "Вес не может быть пустой" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<PetForm.MainPetInfo> label="Окрас" name="color">
        <Input />
      </Form.Item>
      <Form.Item<PetForm.MainPetInfo>
        label="Куратор"
        name="curator"
        rules={[{ required: true, message: "Куратор не может быть пустой" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<PetForm.MainPetInfo>
        label="Дата открытия"
        name="startDate"
        rules={[
          { required: true, message: "Дата открытия не может быть пустой" },
        ]}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item<PetForm.MainPetInfo>
        label="Комментарии"
        name="description"
        rules={[
          { required: true, message: "Комментарии не может быть пустой" },
        ]}
      >
        <TextArea rows={4} style={{ width: "300px" }} />
      </Form.Item>
      <Form.Item<PetForm.MainPetInfo>
        label="Анамнез"
        name="anamnesis"
        rules={[{ required: true, message: "Анамнез не может быть пустой" }]}
      >
        <TextArea rows={4} style={{ width: "300px" }} />
      </Form.Item>
    </Flex>
  );
};
