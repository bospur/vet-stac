import { TagType } from "../enums";

export type Service = {
  id: string;
  name: string;
  price: number;
};

export type Dict = {
  light: Service[];
  medium: Service[];
  premium: Service[];
};

export type DayServices = Service & {
  count: number;
  total?: number;
};
export namespace PetForm {
  export type PetFormFields = {
    mainInfo: MainPetInfo;
    manipulationCalendar: ManipulationCalendar;
  };

  export type MainPetInfo = {
    name: string;
    curator: string;
    tags: TagType[];
    startDate: Date;
    age: number;
    id: string; // number?
    weightStart: number;
    weightEnd: number;
    description: string;
    color: string;
    anamnesis: string;
    type: string;
  };

  export type ManipulationCalendar = {
    completedManipulation: DayManipulation[];
  };

  export type DayManipulation = {
    date: Date;
    manipulations: Manipulation[];
  };

  export type Manipulation = {
    name: string;
    price: number;
    count: number;
    id: string;
  };
}
