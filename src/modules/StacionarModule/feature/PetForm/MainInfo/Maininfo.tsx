import { Form, Input } from "@/shared";
import { PetForm } from "../../../domain";

export const MainInfo = () => {
  return (
    <>
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
        label="Куратор"
        name="curator"
        rules={[{ required: true, message: "Возраст не может быть пустой" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<PetForm.MainPetInfo>
        label="Дата открытия"
        name="startDate"
        rules={[{ required: true, message: "Возраст не может быть пустой" }]}
      >
        <Input disabled />
      </Form.Item>
    </>
  );
};
